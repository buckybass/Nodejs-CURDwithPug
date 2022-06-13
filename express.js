const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.end()
})

const user = [
  {name:'jordi',age:18},
  {name:'bucky',age:30},
  {name:'steve',age:30},
  {name:'tony',age:35}
]

app.get('/users/:id',(req,res)=>{
  const users = user[req.params.id - 1]
  if(Number.isNaN(+req.params.id)){
    return res.status(400).send('Id is not Number')
  }
  if(req.params.id<=0){
    return res.status(400).send('id is nagetive')
  }
  if(!users){
    return res.status(404).send({ error: 'Not found'})
  }else{
    return res.send(users)
  }

})

app.listen(port, () => {
  console.log(`App start is port = ${port}`)
})
