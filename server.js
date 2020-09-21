const result = require('./ConsumerGroupsData.js')
const express = require('express')
const app = express()
const port = 3000
var data = result.consumerGroupsInfo()
app.get('/', (req, res) => {
    res.send(data)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })