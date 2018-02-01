const getFavorites = (req, res) => {
  const db = req.app.get('db')
  const username = req.session.nonpro.email
  db.favorites([username]).then((response) => {
    res.status(200).send(response)
  })
    .catch((error) => {
      res.status(500).send(error)
    })
}

const addFavorite = (req, res) => {
  const db = req.app.get('db')
  const { username, userId } = req.body

  db.add_favorite([username, userId]).then((response) => {
    res.status(200).send(response)
  })
    .catch((error) => {
      res.status(500).send(error)
    })
}


const deleteFavorite = (req, res) => {
  const db = req.app.get('db')
  const { username, userId } = req.params

  db.delete_favorite([username, userId]).then((response) => {
    res.status(200).send(response)
  })
    .catch((error) => {
      res.status(500).send(error)
    })
}

module.exports = (app) => {
  app.get('/api/favorites', getFavorites)
  app.post('/api/favorite', addFavorite)
  app.delete('/api/favorite/:username/:userId', deleteFavorite)
}