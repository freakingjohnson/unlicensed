require('dotenv').config()
const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  massive = require('massive'),
  axios = require('axios')

const app = express();
app.use(cors())
app.use(bodyParser.json());
const userInfo = require('./decoratorUserInfo')
const getUser = require('./resultsController')


massive(process.env.DB_CONNECTION).then((db) => {
  app.set('db', db)
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))

getUser(app)


userInfo(app)


app.use(express.static(`${__dirname}/../build`))

app.listen(process.env.SERVER_PORT, () => { console.log(`Server listening on port ${process.env.SERVER_PORT}`) })


/*
decorator pattern

pointless.js file:

pointless: () => {
    const db = app.get('db')
    db.users([1, 2, 3]).then(res => {
        res.status(200).send(res)
    })
}

module.exports = function(app) {
    app.get('/api/users', pointless)
}


server.js file:

const pointless = require('./pointless')

pointless(app)
*/