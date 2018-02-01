const logout = (req, res) => {
  req.session.destroy()
  res.status(200)
}

module.exports = (app) => {
  app.get('/api/logout', logout)
}