const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:false

    },
    select:{
        type:Boolean,
        default:false
    }
});

const Todo = mongoose.model('Todo',todoSchema);



module.exports = Todo;

