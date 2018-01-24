const bcrypt = require('bcryptjs')

const loginNonPro = (req, res, next) => {
  const db = req.app.get('db')
  const { email, password } = req.body
  db.get_non_pro_email([email]).then((isUser) => {
    const matchedEmail = isUser[0].email
    db.get_non_pro_password([matchedEmail]).then((hash) => {
      const hashed = hash[0].hashpassword
      bcrypt.compare(password, hashed).then((isMatch) => {
        if (isMatch) {
          req.session.nonpro.email = matchedEmail
          req.session.nonpro.loggedIn = true
          res.status(200).send(req.session.nonpro)
        } else {
          res.status(401).send('incorrect password')
        }
      }).catch((err) => { console.log('something is broken', err) })
    }).catch(() => res.status(401).send('incorrect password 1'))
  }).catch(() => res.status(401).send('not found user'))
}

module.exports = (app) => {
  app.post('/api/login', loginNonPro)
}