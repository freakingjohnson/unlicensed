const bcrypt = require('bcryptjs')

const proLogin = async (req, res) => {
  console.log(req)
  const db = req.app.get('db')
  const { email, password } = req.body

  await db.get_pro_password([email]).then((data) => {
    bcrypt.compare(password, data[0].user_password).then((body) => {
      if (body === true) {
        req.session.pro.proLoggedIn = true
        req.session.pro.userId = (data[0].id)
        req.session.pro.userName = `${data[0].first_name}-${data[0].last_name}`
        req.session.pro.email = (data[0].email)
        console.log(req.session)
      }
      res.send(req.session.pro)
    })
  }).catch((error) => {
    res.status(500).send(error)
  })
}

module.exports = (app) => {
  app.post('/api/proLogin', proLogin)
}