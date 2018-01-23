const bcrypt = require('bcryptjs')

const addNonPro = async (req, res) => {
  const db = req.app.get('db')
  // {
  //   email, nonProPassword,
  // } = req.body[0]

  let status = 200
  let response

  await db.add_non_pro(req.body.email).then((data) => {
    status = 200
    response = 'all good'
  }).catch((err) => {
    status = 500
    response = err
  })

  const nonProId = await db.get_one_non_pro(req.body.email)

  bcrypt.genSalt(10, (err, salt) => bcrypt.hash(req.body.password, salt, (err, hash) => {
    let password = hash
    db.add_non_pro_password([password, nonProId[0].id]).then(() => {
      status = 200
      response = 'all good'
    }).catch((err) => {
      console.log(err)
      status = 500
      response = err
    })
  }));
}

module.exports = (app) => {
  app.post('/api/addNonPro', addNonPro)
}