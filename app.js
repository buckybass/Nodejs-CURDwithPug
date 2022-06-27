const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const users = require('./routes/user')
const index = require('./routes/index')

async function startServer(){
  await mongoose.connect('mongodb+srv://Admin:Password@monkey.yasgbdt.mongodb.net/?retryWrites=true&w=majority/manager')
  const app = express()

  app.set('x-powered-by',false)
  app.set('view engine','pug') //res.rend <= pug
  app.set('views', path.join(__dirname,'./views'))

  app.use(express.static(path.join(__dirname,'./public')))
  app.use(express.urlencoded({extended:false}))

  app.use('/',index)
  app.use('/users',users)

  app.use((req,res)=>{
    res.status(404).send('<h1>404 Not Found</h1>')
  })

  app.use((err,req,res,next)=>{
    if (res.headersSent) {
      return next(err)
    }
    res.status(err.status ?? 500).send(`<h1>${err.message ?? 'มีข้อผิดพลาดเกิดขึ้น'}</h1>`)
  })

  let port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`App start is port = ${port}`)
  })
}
startServer()
