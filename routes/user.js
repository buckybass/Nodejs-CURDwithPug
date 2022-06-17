const express = require('express')
const getUserAsTr = require('../utils/getUserAsTr')
const router = express.Router()

const users = [
  { name: 'jordi', age: 18 },
  { name: 'bucky', age: 30 },
  { name: 'steve', age: 30 },
  { name: 'tony', age: 35 }
]

router.param('id', (req, res, next, id) => {
  res.locals.user = users[id - 1] //global scope
  console.log(res.locals.user)
  if (!res.locals.user) {
    const err = new Error('User Not Found')
    err.status = 404
    return next(err)
  }
  return next()
})

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
  <table>
  <a href="/users/new">เพิ่มข้อมูล</a>`)
})

router.get('/new', (req, res) => {
  res.send(`<form action='/users' method="post">
            <input type="text" name="name"  placeholder="name">
            <input type="text" name="age"  placeholder="age">
            <input type="submit"></form>`)
})

router.post('/', (req, res) => {
  users.push(req.body)
  res.redirect('/users')
})

router.get('/:id', (req, res) => {
  res.send(`<h1>ชื่อ:${res.locals.user.name}</h1>
             <h1>อายุ:${res.locals.user.age}</h1>
             <a href="/users/${req.params.id}/edit">แก้ไขข้อมูล</a>`)
})

router.get('/:id/edit', (req, res) => {
  id = req.params.id
  res.send(`<form action='/users' method="post">
            <input type="text" name="name" placeholder="name" value="${res.locals.user.name}">
            <input type="text" name="age"  placeholder="age" value="${res.locals.user.age}">
            <input type="submit"></form>`)
})

router.post('/:id/edit', (req, res) => {
  user[req.params.id - 1] = req.body
  res.redirect('/')
})
module.exports = router
