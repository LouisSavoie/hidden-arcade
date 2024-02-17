// REQUIRES
const express = require('express')
const app = express()
const port = 3000

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
