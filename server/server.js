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
  addNonPro = require('./decorators/addNonPro'),
  loginNonPro = require('./decorators/loginNonPro'),
  checkForSession = require('./middlewares/checkForSession')


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

app.use(checkForSession)

app.use(express.static(`${__dirname}/../build`))

getUser(app)
userInfo(app)
addUser(app)
email(app)
addNonPro(app)
loginNonPro(app)

app.listen(process.env.SERVER_PORT, () => { console.log(`Server listening on port ${process.env.SERVER_PORT}`) })
