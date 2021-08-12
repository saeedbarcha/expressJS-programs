// saeed barcha  dd-mm-yyyy   26-6-2021

// sending html website   as a response to a request express.js

//********  importing Express module  *********//
const express=require("express");
const path =require("path");
console.log(path.join(__dirname , "../public")) // to find name of directory
const staticPath=path.join(__dirname , "../public")

const app=express();
const port=8000;

app.use(express.static(staticPath));
     app.get("/" , (req , res) => {    // route=/ in this case
          res.send("hello from the express");
     })     
app.get("/home" , (req , res) => {    // route=/ in this case
     res.send("this is home");
     })

   


 //**** to listen server
 app.listen(port, ()=>{
      console.log("server is listening at port 8080")
 }); 