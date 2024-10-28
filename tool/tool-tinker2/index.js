const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Tool tinker')
})

app.listen(port, () => {
  console.log(`Tool tinker app ${port}`)
})
