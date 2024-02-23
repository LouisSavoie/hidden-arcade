const express = require("express");
const router = express.Router();

// INDEX ROUTES

// GET index
router.get('/', (req, res) => {
  res.render('index')
})

// GET register
router.get("/register", (req, res) => {
  res.render("register")
})

module.exports = router
