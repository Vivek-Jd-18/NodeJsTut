const { readFile } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // res.write("Hola, buenos dias");
    // res.end();
    if (req.url === '/') {
        res.end("Home");
    }
    else if (req.url === '/about') {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(i, j);
            }
        }
        console.log("about requested");
        res.end("about");
    }
    else {
        res.end(`
        <h1>Opppzzz...!</h1>
        `);
    }
})



const readText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, res) => {
            if (err) {
                console.log(err, "err");
                reject(err)
            }
            console.log(res);
            resolve(res)
        })
    })
}

// const fun1 = async () => {
//     try {
//         const data = await readFile('./data.txt');
//         console.log(data);
//     } catch (error) {
//         console.log(error, "Err");
//     }
// }

// fun1()

readText('./demo1.txt').then((res) => { console.log(res) }).catch((err) => {
    console.log(err);
})

server.listen(3000, () => {
    console.log("Server is Running at port 3000");
})