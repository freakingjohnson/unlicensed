const bcrypt = require('bcryptjs')

const addNonPro = async (req, res) => {
  const db = req.app.get('db')
  const register = req.body
  await db.add_non_pro(register.firstName, register.lastName, register.zipCode, register.email).then((data) => {
    console.log(data, 'hi')
    res.status(200)
  }).catch((err) => {
    // console.log(err, 'err')
    res.status(500).send(err)
  })

  const nonProId = await db.get_one_non_pro(req.body.email)

  bcrypt.genSalt(10, (err, salt) => bcrypt.hash(req.body.password, salt, (err, hash) => {
    let password = hash
    db.add_non_pro_password([password, nonProId[0].id]).then(() => {
      // console.log('hello')
      res.status(200)
    }).catch((err) => {
      // console.log(err, 'err')
      res.status(500).send(err)
    })
  }));
}

module.exports = (app) => {
  app.post('/api/addnonpro', addNonPro)
}