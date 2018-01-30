const logout = req => req.session.destroy()

module.exports = (app) => {
  app.get('/api/logout', logout)
}