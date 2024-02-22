// REQUIRES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require("passport")
const LocalStrategy = require("passport-local")
require('dotenv').config()

//GLOBAL VARS
const port = 3000

// CONNECT MONGOOSE TO MONGODB
mongoose.connect(process.env.DATABASEURL, {})
.then(console.log('Mongoose connected to MongoDB'))
.catch(error => console.log(error.message))
// MONGOOSE MODELS
const User = require('./models/user')

// APP SETUP
app.set('view engine', 'ejs');

// REQUIRE AND USE ROUTES
require('fs').readdirSync('./routes/').forEach((file) => {
  app.use(require('./routes/' + file))
})

// PASSPORT CONFIG
app.use(require("express-session")({
  secret: process.env.EXPSESSSCT,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
  res.locals.currentUser = req.user
  // res.locals.error = 
  // res.locals.success = 
  next()
})

// PORT LISTENING
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
