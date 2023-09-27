const express = require("express");
const router = express.Router();

// INDEX ROUTES

router.get('/', (req, res) => {
  res.send('Welcome to Hidden Arcade')
})

module.exports = router
