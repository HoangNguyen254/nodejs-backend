const express = require('express')
const router = express.Router()
const newsControllder = require('../app/controllers/NewsController')
router.get('/', newsControllder.index)
router.get('/:slug', newsControllder.show)
module.exports = router
