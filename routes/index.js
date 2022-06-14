const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.send('<a href="/users">ดูรายชื่อ</a>')
})

module.exports = router
