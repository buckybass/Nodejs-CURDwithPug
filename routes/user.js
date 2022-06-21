const express = require('express')
const multer = require('multer')
const bytes = require('bytes')
const path = require('path')
const router = express.Router()
const users = require('../models/users')

const upload = multer({
  dest : path.join(__dirname,'../public/uploads'),
  limits:{
    fileSize:bytes('2mb')
  }
})

router.param('id',(req, res, next, id) => {
  res.locals.user = users[id - 1] //global scope
  if (!res.locals.user) {
    const err = new Error('User Not Found')
    err.status = 404
    return next(err)
  }
  return next()
})

router.get('/',require('../controller/users/index'))
router.get('/new', require('../controller/users/new'))
router.post('/', upload.single('avatar') ,require('../controller/users/create'))
router.get('/:id',require('../controller/users/show'))
router.get('/:id/edit',require('../controller/users/edit'))
router.post('/:id/edit', upload.single('avatar') ,require('../controller/users/update'))
router.get('/:id/delete',require('../controller/users/delete'))
module.exports = router
