const express=require("express");
const app=express();
const path=require("path");
const port=8000;
const hbs=require("hbs");


const staticpath=path.join(__dirname , "../public");
const templetePath=path.join(__dirname,"../code7_templates/views");
const partialsPath=path.join(__dirname,"../code7_templates/partials");

// to set view engine
app.set("view engine", "hbs");
app.set('views',templetePath);
hbs.registerPartials(partialsPath);
 
// responce from server
app.get("" ,(req ,res)=>{
     res.render("index");
});
app.get("/about" ,(req ,res)=>{
     res.render("about");
});
app.get("/offers" ,(req ,res)=>{
     res.render("offers");
});


// **********

// build in middleware
app.use(express.static(staticpath))
app.get("/" ,(req ,res) =>{
     res.send("this is html website")
})

app.listen(port ,()=>{
     console.log("server is listening at port : 8000")
})