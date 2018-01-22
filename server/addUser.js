const _ = require('underscore'),
  bcrypt = require('bcryptjs')


const addUser = async (req, res) => {
  const db = req.app.get('db'),
    {
      firstName, lastName, phone, call, text, both, email, userPassword, profilePicUrl, bio,
    } = req.body[0],
    { projectDesc, projectPicUrls } = req.body[2]

  let phoneInfo = [phone]


  if (both) {
    phoneInfo.push('b')
  } else if (text) {
    phoneInfo.push('t')
  } else if (call) {
    phoneInfo.push('c')
  }

  let passwordHash = ''

  await bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(userPassword, salt, (err, hash) => {
      passwordHash = hash
      db.add_user([firstName, lastName, phoneInfo, email, bio, profilePicUrl, passwordHash]).then(() => {
        res.status(200)
      })
    });
  });


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

  const picture = _.zip(projectPicUrls, projectDesc)
  picture.map((image) => {
    db.add_to_workphotos([userId, image[0], image[1]]).then(data => res.status(200).send(data))
  })
}

module.exports = (app) => {
  app.post('/api/addUser', addUser)
}