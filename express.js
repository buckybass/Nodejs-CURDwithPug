const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

const checklogin = (req, res, next) => {
  if (req.get('X-Login-Token') != '1234') {
    return next(new Error('Not logged in'))
  }
    return next()
}

const user = [
  { name: 'jordi', age: 18 },
  { name: 'bucky', age: 30 },
  { name: 'steve', age: 30 },
  { name: 'tony', age: 35 }
]
app.get('/test',checklogin,(req,res)=>{
  res.end()
})
app.get('/users/:id', checklogin,(req, res) => {
  const users = user[req.params.id - 1]
  if (Number.isNaN(+req.params.id)) {
    return res.status(400).send('Id is not Number')
  }
  if (req.params.id <= 0) {
    return res.status(400).send('id is nagetive')
  }
  if (!users) {
    return res.status(404).send({ error: 'Not found' })
  }
  if (req.query.type == 'text') {
    return res.send(`${users.name} ${users.age}`)
  } else {
    return res.send(req.query.field ? users[req.query.field] : users)
  }
})

app.listen(port, () => {
  console.log(`App start is port = ${port}`)
})
