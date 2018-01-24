module.exports = (req, res, next) => {
  console.log('middleware before', req.session)
  if (!req.session.pro) {
    req.session.pro = {
      userName: '',
      userId: '',
      email: '',
      proLoggedIn: false,
    }
  }
  console.log('middleware after', req.session)
  next();
}
// const { session } = req;