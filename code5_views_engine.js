const express=require("express");
const app=express();
const path=require("path");
const port=8000;
const hbs=require("hbs");

const staticpath=path.join(__dirname , "../public");

const staticPath=path.join(__dirname,"../views");

app.set('views',staticPath);

// to set view engine
app.set("view engine", "hbs");

app.get("" ,(req ,res)=>{
     res.render("index");
});
// build in middleware
app.use(express.static(staticpath))
app.get("/" ,(req ,res) =>{
     res.send("this is html website")
})

app.listen(port ,()=>{
     console.log("server is listening at port : 8000")
})