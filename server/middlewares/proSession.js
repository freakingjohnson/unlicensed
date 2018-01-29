module.exports = (req, res, next) => {
  if (!req.session.pro) {
    req.session.pro = {
      userName: '',
      userId: '',
      email: '',
      proLoggedIn: false,
      stripeId: '',
    }
  }
  next();
}