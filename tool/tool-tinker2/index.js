const express = require('express')
const app = express()
const port = 3000

app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})

app.listen(port, () => {
  console.log(`Tinker app ${port}`)
})

express.static(workspaces/js/projects/sep11-freedom-project/tool/tool-tinker2/ [options])

app.use(express.static('temp'))
