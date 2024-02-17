const express = require("express");
const router = express.Router();

// INDEX ROUTES

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
