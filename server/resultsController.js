const getUser = (req, res) => {
  const db = req.app.get('db')
  const params = req

  db.get_user([params.id])
    .then((body) => {
      res.status(200).send(body)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

module.exports = (app) => {
  app.get('/api/users', getUser)
}