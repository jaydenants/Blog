const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

let postSchema = new Schema({
    title:{type:String},
    description:{type:String},
    content:{type:String},

},{
    collection:"POST",
    timestaps:true
})

module.exports = mongoose.model("Post",postSchema)
