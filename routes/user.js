const express = require('express')
const multer = require('multer')
const path = require('path')
const bytes = require('bytes')
const uploadAvatar = require('../utils/uploadAvatar')
const router = express.Router()


const upload = multer({
  dest : path.join(__dirname,'../public/uploads'),
  limits:{
    fileSize:bytes('2mb')
  }
})

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
//Index
router.get('/', (req, res) => {
  res.render('users',{users:users})
})
//New
router.get('/new', (req, res) => {
  res.render('users-create')
})
//Ceate
router.post('/', upload.single('avatar') ,async (req, res) => {
  await uploadAvatar(req,users.length)
  users.push(req.body)
  res.redirect('/users')
})
//Show
router.get('/:id', (req, res) => {
  res.render('users-show',{user:res.locals.user,id:req.params.id})
})
//Edit
router.get('/:id/edit',(req, res) => {
  res.render('users-create',{id:req.params.id,user:res.locals.user})
})
//Update
router.post('/:id/edit', upload.single('avatar') , async(req, res) => {
  users[req.params.id - 1] = req.body
  await uploadAvatar(req,req.params.id)
  res.redirect('/users')
})
//Delete
router.get('/:id/delete', (req, res) => {
  users.splice(req.params.id - 1,1)
  res.redirect('/users')
})
module.exports = router
