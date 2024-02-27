const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`query param is ${req.query.user_id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



