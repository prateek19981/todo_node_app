
const express = require("express");
const port = 8000;
const app = express();

//setup router
app.use('/',require("./routes"));

//setup view engine
app.set("view engine","ejs");

//setup view path
app.set("views","./views");



app.listen(port,function(err){
    if(err)
    {
        console.log("error");
        return;
    }

    console.log("server running on port"+port);

});


