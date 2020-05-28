
const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose");
const todo = require("./model/todo");
const port = 8000;
const app = express();

//htmlparser
app.use(express.urlencoded())

//cookie
app.use(cookieParser());




//static
app.use(express.static("./assets"));



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


