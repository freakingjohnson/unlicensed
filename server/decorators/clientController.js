const getClient = (req, res) => {
  let clientInfo = req.session.user
  return clientInfo
}

module.exports = (app) => {
  app.get('/api/clients', getClient)
}