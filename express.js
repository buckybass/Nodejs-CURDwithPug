const express = require('express')
const port = 3000
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
const checklogin = (req, res, next) => {
  if (req.get('X-Login-Token') != '1234') {
    return next(new Error('Not logged in'))
  }
    return next()
}

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/users/create',(req,res)=>{
  res.send(`<form action="/users" method="post">
  <input type="text" name="name" placeholder='name'>
  <input type="number" name="age" placeholder='age'>
  <input type="submit" value="submit">
</form>`)
})

const user = [
  { name: 'jordi', age: 18 },
  { name: 'bucky', age: 30 },
  { name: 'steve', age: 30 },
  { name: 'tony', age: 35 }
]

app.post('/users',(req,res)=>{
  user.push(req.body)
  return res.redirect(`/users/${user.length}`)
})

app.get('/users',(req,res)=>{
  return res.send(user)
})

app.get('/users/:id',(req, res) => {
  const users = user[req.params.id - 1]
  if (Number.isNaN(+req.params.id)) {
    return res.status(400).send('Id is not Number')
  }
  if (req.params.id <= 0) {
    return res.status(400).send('id is nagetive')
  }
  if (!users) {
    return res.status(404).send({ error: 'User Not found' })
  }
  if (req.query.type == 'text') {
    return res.send(`${users.name} ${users.age}`)
  } else {
    return res.send(req.query.field ? users[req.query.field] : users)
  }
})

app.get('/test-login',(req,res,next)=>{
  const token = req.get("X-Login-Token")
  if(!token) {
    const err = new Error('Token not Found')
    err.status=401
    return next(err)
  }
  if(token != '1234'){
    const err = new Error('Token mismatch')
    err.status=403
    return next(err)
  }
  next()
},(req,res)=>{
  res.end()
})

app.use((req,res)=>{
  res.status(404).send({error:'Not Found'})
})

app.use((err,req,res,next)=>{
  if (res.headersSent) {
    return next(err)
  }
  res.status(err.status ?? 500).send({error: err.message})
})

app.listen(port, () => {
  console.log(`App start is port = ${port}`)
})
