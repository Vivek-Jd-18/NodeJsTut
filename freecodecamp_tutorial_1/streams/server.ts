const http = require('http'); 
const { writeFileSync,readFileSync } = require("fs");
const { createReadStream } = require('fs')


// for (let index = 0; index < 10000; index++) {
    //     writeFileSync("./files/data.txt"," Jay Shree Ram ",{flag:'a'});
    // }

// const stream = createReadStream('./files/data.txt',{highWaterMark:10000000,encoding:'utf8'});

// stream.on('data',(res)=>{
//     console.log(res);
// })


const server = http.createServer((req,res)=>{
    const text =  readFileSync("./files/data.txt","utf8");
    res.end(text);
    // const fileStream = createReadStream("./files/data.txt","utf8")
    // fileStream.on("open",()=>{
    //     fileStream.pipe(res)
    // });
    // fileStream.on("error",()=>{
    //     fileStream.pipe()
    // });

});

server.listen(3000,()=>{
    console.log("Server is running");
})