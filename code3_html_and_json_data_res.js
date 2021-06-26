// saeed barcha  dd-mm-yyyy   25-6-2021

// sending html and json data as a response to a request express.js

//********  importing Express module  *********//
const express=require("express");

const app=express();
const port=8080;
app.get("/" , (req , res) => {    // route=/ in this case
     res.send("hello from the express");
     })


///****** html data  */
app.get("/html" , (req , res) => { 
     res.write("<h1>this page contains html data</h1>"); // to write something on document
     res.write("<h1>this page contains html data</h1>"); // to write something on document
     res.send(); // to stop searching bar
     });

///****** json data  */
app.get("/json" , (req , res) => { 
          // res.send({
          //      name : "saeed",
          //      age : 100,
          //      address: "rahimabad"
          // });
     // both are same
          res.json({
               name : "saeed",
               age : 100,
               address: "rahimabad"
          });

     });



 //**** to listen server
 app.listen(port, ()=>{
      console.log("server is listening at port 8080")
 }); 