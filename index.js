const express = require('express')
const app = express()
const port = 3100

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`xiraenya.com listening at http://localhost:${port}`)
})
