// saeed barcha  dd-mm-yyyy   17-6-2021

//express.js
// is a node.js framework.it's the most popular framework as of now.
// is a web application framework that provides you with a simple API to build websites, web apps and back ends. 

// writing a small REST API server in plain Node.js (taht is using only core modules) and then in express.js.the latter will take 5-10x less time and lines of code.
//////////////////////////////////////////////
 
  
//********  importing Express module  *********//
const express=require("express");

const app=express(); // is function use to to initilize methods and properties to a variable app
     // in node we need to require many modules to show some text on browser.

     // app.get(route,callback);

     // callback functions
   // the callback function has 2 parameters, request(req) and resposte(res).
   //the request object (req) respresents the http request and has property for the request query string, parameters, body ,http headers ,etc.

   // similarly the response onject represents the http response that the express app sends when it receives an http request.

     // app.get(route,callback=(req ,res));

     // creating API using express
          // get    => read
          // post   => create
          // put    => update
          // delete => delete

app.get("/" , (req , res) => {    // route=/ in this case
     res.send("hello from the express");
     })

app.get("/about" , (req , res) => { 
     res.send("hello from the about page");
     })

app.get("/home" , (req , res) => { 
          res.send("hello from the home page");
     })
 // to listen server
 app.listen(8080, ()=>{
      console.log("server is listening at port 8080")
 }); 