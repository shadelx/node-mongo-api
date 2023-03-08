const express = require('express')
const router = express.Router()

const {
    readUser,
    createUser,
    updateUser,
    deleteUser,
    readUsers
} = require('../controllers/users')

router.get('/:id', readUser)
router.post('/', createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.get('/', readUsers)

module.exports = router