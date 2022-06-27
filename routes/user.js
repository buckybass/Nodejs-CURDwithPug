const express = require('express')
const multer = require('multer')
const bytes = require('bytes')
const path = require('path')
const router = express.Router()

const upload = multer({
  dest : path.join(__dirname,'../public/uploads'),
  limits:{
    fileSize:bytes('10mb')
  }
})

router.param('id',require('../controller/users/paramId'))
router.get('/',require('../controller/users/index'))
router.get('/new', require('../controller/users/new'))
router.post('/', upload.single('avatar') ,require('../controller/users/create'))
router.get('/:id',require('../controller/users/show'))
router.get('/:id/edit',require('../controller/users/edit'))
router.post('/:id/edit', upload.single('avatar') ,require('../controller/users/update'))
router.get('/:id/delete',require('../controller/users/delete'))
router.post('/:id/record',require('../controller/users/record.js'))
module.exports = router
