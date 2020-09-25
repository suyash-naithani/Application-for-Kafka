
const express = require('express')
const result = require('./ConsumerGroupsData.js')
const app = express()
const port = 5000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/", result.listGroups)

app.listen(port, () => console.log(`Listening on port ${port}`))