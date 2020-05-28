// import mongoose
const mongoose = require("mongoose");

// create a new todo schema
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


// create a model
const Todo = mongoose.model('Todo',todoSchema);




// export the model
module.exports = Todo;

