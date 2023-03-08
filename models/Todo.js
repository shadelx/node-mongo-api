const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    user: {required: true, type: String},
    body: {required: true, type: String}
})

module.exports = mongoose.model('Todo', todoSchema)