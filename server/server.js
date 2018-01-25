require('dotenv').config()
const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  massive = require('massive'),
  userInfo = require('./decorators/decoratorUserInfo'),
  getUser = require('./decorators/resultsController'),
  addUser = require('./decorators/addUser'),
  email = require('./decorators/email'),
  proLogin = require('./decorators/proLoginController'),
  proSession = require('./middlewares/proSession'),
  getFavorites = require('./decorators/favoritesController'),
  createInitialSession = require('./middlewares/session'),
  addNonPro = require('./decorators/addNonPro'),
  loginNonPro = require('./decorators/loginNonPro'),
  checkForSession = require('./middlewares/checkForSession'),
  updateProInfo = require('./decorators/updateProInfo')


const app = express();

app.use(cors())
app.use(bodyParser.json());

massive(process.env.DB_CONNECTION).then((db) => {
  app.set('db', db)
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))

app.use(proSession)
app.use(checkForSession)

app.use(express.static(`${__dirname}/../build`))
app.use(createInitialSession)

getUser(app)
userInfo(app)
addUser(app)
email(app)
proLogin(app)
getFavorites(app)
updateProInfo(app)
addNonPro(app)
loginNonPro(app)

app.listen(process.env.SERVER_PORT, () => { console.log(`Server listening on port ${process.env.SERVER_PORT}`) })
