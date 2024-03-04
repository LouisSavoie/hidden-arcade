const express = require('express')
const router = express.Router()
const User = require('../models/user')

// INDEX ROUTES

// GET index
router.get('/', (req, res) => {
  res.render('index')
})

// GET register
router.get('/register', (req, res) => {
  res.render('register')
})

// POST register
router.post('/register', (req, res) => {
  // get data from form
  const newUser = new User({ username: req.body.username })
  // add data to User model and add to DB
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      return res.render('/register')
    }
    res.redirect('/')
  })
})

// GET log in
router.get('/login', (req, res) => {
  res.render('login')
})

// POST log in
router.post('/login', (req, res) => {
  res.redirect('/')
})

// GET log out
router.get('/logout', (req, res) => {
  res.redirect('/')
})

module.exports = router
