const mongoose = require('mongoose'); 

const TodoSchema = mongoose.Schema({

    UserName: {type:String},
    TodoTitle: {type:String},
    TodoDescription: {type:String},
    TodoStatus: {type:String},
    TodoCreateDate: {type:Date},
    TodoUpdateDate: {type:Date},

},{versionKey:false});

const TodoListModel = mongoose.model('todolist',TodoSchema);
module.exports = TodoListModel;