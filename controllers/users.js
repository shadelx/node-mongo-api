const User = require("../models/User");

async function readUser(req, res) {
    res.send("you read pet")
    
}

async function createUser(req, res){
    res.send("you read pet")
}

async function updateUser(req,res){
    res.send("you read pet")
}

async function deleteUser(req,res){
    res.send("you read pet")
}

async function readUsers(req,res){
    res.send("you read pet")
}

module.exports = {
    readUser,
    createUser,
    updateUser,
    deleteUser,
    readUsers
}
