const TodoListModel = require("../models/TodoListModel");

exports.CreateTodo=(req,res)=>{
    let TodoTitle = req.body.TodoTitle;
    let TodoDescription = req.body.TodoDescription;
    let UserName = req.headers.username;
    
    let PostBody = {
    
    UserName: UserName,
    TodoTitle: TodoTitle,
    TodoDescription: TodoDescription,
    TodoStatus: "New",
    TodoCreateDate: Date.now(),
    TodoUpdateDate: Date.now()
    }
        
    TodoListModel.create(PostBody, (err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.SelectTodo=(req,res)=>{  
    
    let UserName = req.headers.username;
    TodoListModel.find({UserName:UserName},(err,data)=>{    
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.UpdateTodo=(req,res)=>{  
    
    let _id = req.body._id;
    let TodoTitle = req.body.TodoTitle;
    let TodoDescription = req.body.TodoDescription;
    let TodoUpdateDate = Date.now();
    
    let PostBody = {
    TodoTitle: TodoTitle,
    TodoDescription: TodoDescription,
    TodoUpdateDate: TodoUpdateDate
    }

    TodoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{    
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.UpdateStatusTodo=(req,res)=>{  
    
    let _id = req.body._id;
    let TodoStatus = req.body.TodoStatus;
    let TodoUpdateDate = Date.now();
    
    let PostBody = {
        TodoStatus: TodoStatus,
        TodoUpdateDate: TodoUpdateDate
    }

    TodoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{    
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.RemoveTodo=(req,res)=>{  
    
    let _id = req.body._id;
    
    TodoListModel.remove({_id:_id},(err,data)=>{    
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.SelectTodoByStatus=(req,res)=>{  
    
    let UserName = req.headers.Username;
    let TodoStatus = req.body.TodoStatus;

    TodoListModel.find({UserName:UserName, TodoStatus:TodoStatus},(err,data)=>{    
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.SelectTodoByDate=(req,res)=>{  
    
    let UserName = req.headers.Username;
    let FromDate = req.body.FromDate;
    let ToDate = req.body.ToDate;

    TodoListModel.find({UserName:UserName, TodoCreateDate:{$gte:new Date(FromDate), $lte: new Date(ToDate)}},(err,data)=>{    
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}