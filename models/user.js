const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

let userSchema = new Schema({
    username:{type:String,unique:true},
    password:{type:String,unique:true},
    email:{type:String,unique:true},
    
},{
    collection:"USER"
})

module.exports = mongoose.model("User",userSchema)