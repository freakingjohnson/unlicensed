module.exports = (req, res, next) => {
  if (!req.session.nonpro) {
    req.session.nonpro = {
      userName: '',
      userId: '',
      email: '',
      loggedIn: false,
    }
  }
  next()
}