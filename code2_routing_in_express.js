// saeed barcha  dd-mm-yyyy   25-6-2021

// routing in express.js

//********  importing Express module  *********//
const express=require("express");

const app=express();
const port=8000;
app.get("/" , (req , res) => {    // route=/ in this case
     res.send("hello from the express");
     })

app.get("/about" , (req , res) => { 
     res.status(200);
     res.send("hello from the about page");
     })

app.get("/home" , (req , res) => { 
          res.send("hello from the home page");
     })
 //**** to listen server
 app.listen(port, ()=>{
      console.log("server is listening at port 8080")
 }); 