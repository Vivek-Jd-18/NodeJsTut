const http = require('http');
const {readFileSync} = require('fs') 

const home = readFileSync('./assets/index.html')

const server = http.createServer((req: any, res: any) => {
    let _url: string = req.url;
    if (_url === "/about") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(home)
        res.end();
    } else if (_url === "/contact") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write("<h1>Contact</h1>")
        res.end();
    } else {
        res.writeHead(200, { "content-type": "text/html" })
        res.write("<h1>Not Found 404 </h1>")
        res.end();
    }
    // res.end("Hola Hermano..!")
})

server.listen(5000, () => {
    console.log("Server is commenced...!");
})