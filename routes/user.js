const express = require('express')
const getUserAsTr = require('../utils/getUserAsTr')
const router = express.Router()

const users = [
  { name: 'jordi', age: 18 },
  { name: 'bucky', age: 30 },
  { name: 'steve', age: 30 },
  { name: 'tony', age: 35 }
]

router.get('/', (req, res) => {
  res.send(`<table>
  <thead>
  <tr>
    <th>ชื่อ</th>
    <th>อายุ</th>
  </tr>
  <thead>
  <tbody>
  ${getUserAsTr(users)}
  </tbody>
  <table>`)
})


module.exports = router
