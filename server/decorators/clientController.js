const getClient = (req, res) => {
  let clientInfo = req.session.user
  console.log(clientInfo)
  return clientInfo
}


//   db.get_client([params.session.user]).then((body) => {
//     res.status(200).send(body)
//     console.log(body)
//   })
//     .catch((error) => {
//       res.status(500).send(error)
//     })
// }

module.exports = (app) => {
  app.get('/api/clients', getClient)
}