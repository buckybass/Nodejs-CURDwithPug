const express = require('express')
const users = require('./routes/user')
const index = require('./routes/index')

const port = 3000
const app = express()

app.use(express.urlencoded({extended:false}))

app.use('/',index)
app.use('/users',users)

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
