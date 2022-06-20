const express = require('express')
const path = require('path')
const users = require('./routes/user')
const index = require('./routes/index')
const morgan = require('morgan')

const app = express()

app.set('x-powered-by',false)
app.set('view engine','pug') //res.rend <= pug
app.set('views', path.join(__dirname,'./views'))

app.use(express.static(path.join(__dirname,'./public')))
app.use(express.urlencoded({extended:false}))
// app.use((morgan('combined')))

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

let port = process.env.PORT;
if(port == null || port == ""){
  port = 4000
}
app.listen(port, () => {
  console.log(`App start is port = ${port}`)
})
