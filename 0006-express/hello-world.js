const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.delete('/ticket/:id', (req, res) => {
  res.send(`ticket deleted ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



