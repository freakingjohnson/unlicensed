module.exports = (req, res, next) => {
  if (!req.session.nonpro) {
    req.session.nonpro = {
      email: '',
      //   admin: false,
      loggedIn: false,
      userID: 0,
    }
  }
  next()
}