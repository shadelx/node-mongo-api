const mongoose = require('mongoose')
const brcrypt = require('brcypt')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre('save', async (next) => { 
    const hash = await brcrypt.hash(this.password, 10)
    this.password = hash
    next()
 })

 userSchema.methods.isValidPassword = async (password) => { 
    const user =  this;
    const compare =  await brcrypt.compare(password, user.password)
    return compare
  }

  module.exports = mongoose.model('User', userSchema)