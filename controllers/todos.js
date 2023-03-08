const Todo = require("../models/Todo");

async function readTodo(req, res) {
    try {
        const data = await Todo.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

async function createTodo(req, res){
    const { body } = req;
    const data = await new Todo({
        user : body.user,
        body : body.body 
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function updateTodo(req,res){
    try {
        const { body, params: { id } }=req;
        const result = await Todo.findByIdAndUpdate(id, body)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function deleteTodo(req,res){
    try {
        const id = req.params.id;
        const data = await Todo.findByIdAndDelete(id)
        res.send("Document deleted")
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

async function readTodos(req,res){
    try {
        const data = await Todo.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    readTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    readTodos
}
