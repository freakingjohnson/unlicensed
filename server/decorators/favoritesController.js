const getFavorites = (req, res, next) => {
  const db = req.app.get('db')
  const params = req
  db.favorites().then((response) => {
    res.status(200).send(response)
  })
    .catch((error) => {
      res.status(500).send(error)
    })
}

const addFavorite = (req, res) => {
  const db = req.app.get('db')
  const { email, userId } = req.body
  db.add_favorite(email, userId).then((response) => {
    if (response.filter(x => x.userId === userId)[0]) {
      res.end()
      return
    }
    db.add_favorite(email, userId).then((response) => {
      res.status(200).send(response)
    })
      .catch((error) => {
        res.status(500).send(error)
      })
  })
}


const deleteFavorite = (req, res) => {
  const db = req.app.get('db')
  const { email, userId } = req.params
  db.delete_favorite([email, userId]).then((response) => {
    res.status(200).send(response)
  })
    .catch((error) => {
      res.status(500).send(error)
    })
}

module.exports = (app) => {
  app.get('/api/favorites', getFavorites)
  app.post('/api/favorites', addFavorite)
  app.delete('/api/favorites/:email/:userId', deleteFavorite)
}