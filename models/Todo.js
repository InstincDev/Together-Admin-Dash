const mongoose = require("mongoose");


const TodoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            require: true,
        },
        todo:{
            type: String,
            require: true,
        }
    }
);

module.exports = mongoose.model('Todo', TodoSchema)