const express = require('express')
const users = require('./routes/user')
const index = require('./routes/index')
const morgan = require('morgan')

const port = 3000
const app = express()

app.use(express.urlencoded({extended:false}))
app.use((morgan('combined')))

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

app.listen(port, () => {
  console.log(`App start is port = ${port}`)
})
