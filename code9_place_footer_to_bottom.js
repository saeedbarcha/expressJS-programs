const express=require("express");
const app=express();
const path=require("path");
const port=8000;
const hbs=require("hbs");


const staticpath=path.join(__dirname , "../public");
const templetePath=path.join(__dirname,"../code9_adding_css_footer/views");
const partialsPath=path.join(__dirname,"../code9_adding_css_footer/partials");

// to set view engine
app.set("view engine", "hbs");
app.set('views',templetePath);
hbs.registerPartials(partialsPath);
 
app.get("" ,(req ,res)=>{
     res.render("index");
});
app.get("/about" ,(req ,res)=>{
     res.render("about");
});
app.get("/menu" ,(req ,res)=>{
     res.render("menu");
});
app.get("/info" ,(req ,res)=>{
     res.render("info");
});

// **********

// build in middleware
app.use(express.static(staticpath))
app.get("/" ,(req ,res) =>{
     res.send("this is html website")
})

//for throwing 404 error
app.get("*" ,(req ,res) =>{
     res.render("404" , {
          errorcomment:" .....oopps this page is not exist.... :("
     })
})

app.listen(port ,()=>{
     console.log("server is listening at port : 8000")
})  