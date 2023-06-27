const express = require('express')
const app = express()
const cors = require('cors')
const port = 1234

const data = require("./cardsData")

app.use(cors())
 

app.get('/data', (req, res) => {
  return res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 