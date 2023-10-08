const {readFile} = require('fs')

readFile('./demo/sub/index.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log(res);
})
