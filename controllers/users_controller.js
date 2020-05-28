const User = require("../model/users");

module.exports.signup = function(req,res){
    return res.render("user_signup",{
        title:"Todo | signup"
    });
}

module.exports.signin = function(req,res){
    return res.render("user_signin",{title:"Todo | signin "});
}


module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirmpassword){
        return res.redirect("back");
    }

    User.findOne({email:req.body.email},function(err,result){
        if(err){
            console.log("error in finding user");
            return;
        }

        if(!result)
        {
            User.create(req.body,function(err,result){
                if(err)
                {
                    console.log("err in creating user",err);
                    return;
                }

                return res.redirect("/user/signin");
            } )
        }
        else{
            return res.redirect("back");
        }

    });


    
    



}