// REQUIRES
const express = require('express')
const app = express()
const port = 3000

// ROUTES
const indexRoutes = require('./routes/index')
app.use(indexRoutes)

// PORT LISTENING
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
