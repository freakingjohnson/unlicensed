module.exports = (req, res, next) => {
  console.log('middleware before', req.session)
  if (!req.session.nonpro) {
    req.session.nonpro = {
      userName: '',
      userId: '',
      email: '',
      loggedIn: false,
    }
  }
  console.log('middleware after', req.session)
  next()
}