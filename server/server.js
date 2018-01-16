require('dotenv').config()
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  massive = require('massive'),
  axios = require('axios')

const app = express();

app.use(bodyParser.json());
app.use(cors())

massive(process.env.DB_CONNECTION).then((db) => {
  app.set('db', db)
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))


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