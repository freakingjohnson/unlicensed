module.exports = function (req, res, next) {
  const { session } = req;
  if (!session.user) {
    session.user = {
      userName: '',
      admin: false,
      client: false,
    }
  }
  next();
}