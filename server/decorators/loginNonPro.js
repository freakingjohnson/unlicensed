const bcrypt = require('bcryptjs')

const loginNonPro = async (req, res) => {
  const db = req.app.get('db')
  const { email, password } = req.body

  await db.get_non_pro_password([email]).then((data) => {
    bcrypt.compare(password, data[0].hashpassword).then((body) => {
      if (body === true) {
        req.session.nonpro.loggedIn = true
        req.session.nonpro.userId = (data[0].id)
        req.session.nonpro.userName = `${data[0].first_name}-${data[0].last_name}`
        req.session.nonpro.email = (data[0].email)
      }
      res.send(req.session.nonpro)
    })
  }).catch((error) => {
    res.status(500).send(error)
  })
}

module.exports = (app) => {
  app.post('/api/login', loginNonPro)
}