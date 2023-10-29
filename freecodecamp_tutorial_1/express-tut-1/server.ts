import express from "express";
import { players } from "./utils/players";

const app = express();

app.use(express.static("./public"))
app.use(express.urlencoded({extended:false}))

app.get('/node-api/players',(req:any,res:any)=>{
    res.status(200).json({success:true,data:players});
})


app.post('/players',(req:any,res:any)=>{
    const {name} = req.body;
    console.log(name,req.body);
    
    if(!name){
        return res.status(400).json({success:false,msg:"Please Provide name"})
    }
    res.status(201).json({success:true,data:[...players,name]})
})

app.post("/login",(req:any,res:any)=>{
    console.log(req.body);   
    res.send(`Welcome ${req.body.name}`)
})

app.listen(5000, () => {
    console.log("I'm listening Thoroughly");
})
