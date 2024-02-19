// REQUIRES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

//GLOBAL VARS
const port = 3000

// CONNECT MONGOOSE TO MONGODB
mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(console.log('Mongoose connected to MongoDB'))
.catch(error => console.log(error.message))


// APP SETUP
app.set('view engine', 'ejs');

// ROUTES
require('fs').readdirSync('./routes/').forEach((file) => {
  app.use(require('./routes/' + file))
})

// PORT LISTENING
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
