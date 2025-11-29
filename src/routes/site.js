const express = require('express')
const router = express.Router()
const siteControllder = require('../app/controllers/SiteController')
router.get('/', siteControllder.index)
// router.get('/:slug', newsControllder.show)
module.exports = router
