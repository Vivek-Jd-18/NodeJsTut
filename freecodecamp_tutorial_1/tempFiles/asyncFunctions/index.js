const {readFile,writeFile} = require('fs');

writeFile("./data.json",
        '\n{ "name":"vivek","age":"23"},'
        ,{flag:'a'},(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log(res);
})

readFile("./data1.txt",'utf8',(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log(res);
})