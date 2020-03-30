const express = require('express')
const router = express()
const apiController = require('../controllers/apiControllers')

router.get('/categories', apiController.getCategories)
router.get('/categories2', apiController.getCategories2)
router.post('/mail', apiController.sendEmail)

module.exports = router