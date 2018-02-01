const _ = require('underscore'),
  bcrypt = require('bcryptjs'),
  axios = require('axios')

const addUser = async (req, res) => {
  const db = req.app.get('db'),
    {
      firstName, lastName, phone, call, text, both, email, userPassword, profilePicUrl, bio, location,
    } = req.body[0],
    { projectDescList, projectPicUrls } = req.body[2]

  let status = 200
  let response;

  let zipcode = ''

  if (location) {
    zipcode = await axios.get(`https://www.zipcodeapi.com/rest/${process.env.ZIPCODE_KEY}/info.json/${location}/radians`)
  }

  const workLocation = `${zipcode.data.city}, ${zipcode.data.state} ${zipcode.data.zip_code}`

  let phoneInfo = [phone]

  if (both) {
    phoneInfo.push('b')
  } else if (text) {
    phoneInfo.push('t')
  } else if (call) {
    phoneInfo.push('c')
  }

  await db.add_user([firstName, lastName, phoneInfo, email, bio, profilePicUrl, workLocation]).then(() => {
    status = 200
    response = 'all good'
  }).catch((err) => {
    status = 500
    response = err
  })


  const userId = await db.get_one_user([email])

  const serviceList = _.omit(req.body[1], (value, key) => {
    if (value === false) {
      return key
    }
  })

  let services = []

  for (let key in serviceList) {
    services.push(key)
  }

  await services.map((service) => {
    db.add_services([userId[0].id, service]).then(() => {
      status = 200
      response = 'all good'
    }).catch((err) => {
      status = 500
      response = err
    })
  })

  const picture = _.zip(projectPicUrls, projectDescList)

  await picture.map((image) => {
    db.add_to_workphotos([userId[0].id, image[0], image[1]]).then(() => {
      status = 200
      response = 'all good'
    }).catch((err) => {
      status = 500
      response = err
    })
  })

  bcrypt.genSalt(10, (err, salt) => bcrypt.hash(userPassword, salt, (err, hash) => {
    let password = hash
    db.add_password([password, userId[0].id]).then((data) => {
      status = 200
      response = data
    }).catch((err) => {
      status = 500
      response = err
    })
  }));

  res.status(status).send(response)
}

module.exports = (app) => {
  app.post('/api/addUser', addUser)
}