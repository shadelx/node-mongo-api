const express = require('express')
const router = express.Router()

const {
    readTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    readTodos
} = require('../controllers/todos')

router.get('/:id', readTodo)
router.post('/', createTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)
router.get('/', readTodos)

module.exports = router