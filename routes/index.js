const express = require('express')
const router = express.Router()

router.get('/',(req, res) => { 
    res.send('<h1>welcome to this api</h1>')
 })

 router.use('/todo', require('./todos'))
 router.use('/auth', require('./auth'))
 
 
 module.exports = router