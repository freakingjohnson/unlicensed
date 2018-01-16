const getUser = (req, res) => {
  const db = req.app.get('db')
  const params = req
  db.get_user([params.id])
    .then(body => res.status(200).send(body))
    .catch((error) => {
      console.log(error)
      res.status(500).send()
    })
}

module.exports = function (app) {
  app.get('/api/users', getUser)
}