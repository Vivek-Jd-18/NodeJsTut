// const http = require('http');
// const {readFileSync} = require('fs') 

// const home = readFileSync('./assets/index.html')
// const _img = readFileSync('./assets/images/pik.jpeg')

// const server = http.createServer((req: any, res: any) => {
//     let _url: string = req.url;
//     if (_url === "/about") {
//         res.writeHead(200, { "content-type": "text/html" })
//         res.write(home)
//         res.end();
//     } else if (_url === "/contact") {
//         res.writeHead(200, { "content-type": "text/html" })
//         res.write("<h1>Contact</h1>")
//         res.end();
//     } else if (_url === "/pik.jpeg") {
//         res.writeHead(200, { "content-type": "image/jpeg" })
//         res.write(_img)
//         res.end();
//     } else {
//         res.writeHead(200, { "content-type": "text/html" })
//         res.write("<h1>Not Found 404 </h1>")
//         res.end();
//     }
//     // res.end("Hola Hermano..!")
// })

// server.listen(5000, () => {
//     console.log("Server is commenced...!");
// })


import express from "express";

const app = express();

app.listen(4000,()=>{
    console.log("I'm Listening to you");
})

