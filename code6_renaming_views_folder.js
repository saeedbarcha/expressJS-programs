const express=require("express");
const app=express();
const path=require("path");
const port=8000;
const hbs=require("hbs");


// renaming the views folder
const staticPath=path.join(__dirname,"../code6_templets");
app.set('views',staticPath);

// to set view engine
app.set("view engine", "hbs");
// responce from server
app.get("" ,(req ,res)=>{
     res.render("index" ,{
          dData:"noor",
     });
});
app.get("/about" ,(req ,res)=>{
     res.render("about");
});


// **********
const staticpath=path.join(__dirname , "../public");

// build in middleware
app.use(express.static(staticpath))
app.get("/" ,(req ,res) =>{
     res.send("this is html website")
})

app.listen(port ,()=>{
     console.log("server is listening at port : 8000")
})