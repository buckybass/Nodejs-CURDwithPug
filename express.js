const express =require('express')
const port=3000
const app= express()


app.get('/',(req,res)=>{
  res.send('<h1>hello</h1>')
})
app.get('/o',(req,res)=>{
  res.send('o10')
})

app.listen(port,()=>{
  console.log(`App start is port = ${port}`)
})
