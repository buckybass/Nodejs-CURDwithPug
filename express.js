const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.end()
})

app.get('/404', (req, res) => {
  res.status(404).send('Not found 404')
})

app.get('/403', (req, res) => {
  res.status(403).send('Not Allow')

})

app.listen(port, () => {
  console.log(`App start is port = ${port}`)
})
