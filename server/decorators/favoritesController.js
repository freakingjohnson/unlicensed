const getFavorites = (req, res, next) => {
  const db = app.get('db')
  const params = req
  db.favorites().then((response) => {
    res.status(200).send(response)
  })
}