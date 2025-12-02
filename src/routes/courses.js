const express = require('express')
const router = express.Router()
const courseControllder = require('../app/controllers/CourseController')
router.get('/:slug', courseControllder.show)
module.exports = router
