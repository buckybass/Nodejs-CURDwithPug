const express = require('express')
const router = express.Router()
const pug = require('pug')

const users = [
  { name: 'jordi', age: 18 },
  { name: 'bucky', age: 30 },
  { name: 'steve', age: 30 },
  { name: 'tony', age: 35 }
]

router.param('id', (req, res, next, id) => {
  res.locals.user = users[id - 1] //global scope
  if (!res.locals.user) {
    const err = new Error('User Not Found')
    err.status = 404
    return next(err)
  }
  return next()
})

router.get('/', (req, res) => {
  res.render('users',{users:users})
})

router.get('/new', (req, res) => {
  res.render('users-create')
})

router.post('/', (req, res) => {
  users.push(req.body)
  res.redirect('/users')
})

router.get('/:id', (req, res) => {
  res.render('users-show')
})

router.get('/:id/edit', (req, res) => {
  id = req.params.id
  res.render('users-create',{id:id,user:res.locals.user})
})

router.post('/:id/edit', (req, res) => {
  users[req.params.id - 1] = req.body
  res.redirect('/users')
})

router.get('/:id/delete', (req, res) => {
  users.splice(req.params.id - 1,1)
  res.redirect('/users')
})
module.exports = router
