const express = require('express')
const router = express.Router()
const meControllder = require('../app/controllers/MeController')
router.get('/stored/courses', meControllder.storedCourses)
router.get('/trash/courses', meControllder.trashCourses)
module.exports = router
