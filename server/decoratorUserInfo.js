const userInfo = (req, res) => {
  const db = req.app.get('db')
  const params = req.body
  db.find_user_info([params.id]).then((res) => {
    res.status(200).send(res)
  })
}

module.exports = function (app) {
  app.get('/api/get', userInfo)
}