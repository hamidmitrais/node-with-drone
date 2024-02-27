const { Router } = require('express')
const { index, hello } = require('./default.js')

const router = Router()

router.get('/', index)
router.get('/hello/:name', hello)

module.exports = router