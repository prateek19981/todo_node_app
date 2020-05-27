// importmodel
const Todo = require('../model/todo');

// exportcontroller

// homecontroller
module.exports.home = function(req,res){

   Todo.find({},function(err,todo)
   {
       if(err)
       {
           console.log("error in finding todo",err);
       }
       
       res.render("home",{todo_list:todo});
   })

}

// cretaetask
module.exports.create = function(req,res){
    Todo.create({
        task:req.body.task,
        category:req.body.category,
        created_at:req.body.date,
        },function(err,todo){
    if(err)
    {
        console.log("error "+ err);
        return;
    }

    
    
} );
    return res.redirect("back");
}

// select task item
module.exports.select = function(req,res){

    console.log("inside update");
    let id = req.query.id;
    Todo.findByIdAndUpdate(id,{select:true},function(err,result){
        if(err)
        {
            console.log("err in finding",err);
            return;
        }
       
        
        console.log("inside update",result);

    

    });
  
    

    return res.redirect("back");



}

// delete task
module.exports.remove = function(req,res){
    Todo.deleteMany({select:true},function(err,todo){
        if(err)
        {
            console.log("error in finding selected todos");
            return;
        }
        
        console.log("inside remove control",todo);
        return res.redirect("back");
    })
}



    
   
    
    
    







