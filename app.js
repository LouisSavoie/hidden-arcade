// REQUIRES
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

// GLOBAL VARS
const port = 3000

// CONNECT MONGOOSE TO MONGODB
mongoose.connect(process.env.DATABASEURL, {})
  .then(console.log('Mongoose connected to MongoDB'))
  .catch(error => console.log(error.message))
// MONGOOSE MODELS
const User = require('./models/user')

// APP SETUP
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// REQUIRE AND USE ROUTES
require('fs').readdirSync('./routes/').forEach((file) => {
  app.use(require('./routes/' + file))
})

// PORT LISTENING
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
