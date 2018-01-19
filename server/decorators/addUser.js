const _ = require('underscore'),
  axios = require('axios')

const addUser = async (req, res) => {
  const db = req.app.get('db'),
    {
      firstName, lastName, phone, call, text, both, email, profilePicUrl, bio, location,
    } = req.body[0],
    { projectDescList, projectPicUrls } = req.body[2]

  const zipcode = await axios.get(`https://www.zipcodeapi.com/rest/${process.env.ZIPCODE_KEY}/info.json/${location}/radians`)

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
    res.status(200)
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

  services.map((service) => {
    db.add_services([userId[0].id, service]).then(() => {
      res.status(200)
    })
  })

  const picture = _.zip(projectPicUrls, projectDescList)

  picture.map((image) => {
    db.add_to_workphotos([userId[0].id, image[0], image[1]]).then(data => res.status(200).send(data))
  })
}

module.exports = (app) => {
  app.post('/api/addUser', addUser)
}