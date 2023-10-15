const { readFile, writeFile } = require('fs');
const http = require('http');
const util = require('util')
const EventEmitter = require('events');


const readPro = util.promisify(readFile);
const writePro = util.promisify(writeFile);

const server = http.createServer((req: any, res: any) => {
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



// const readText = (path: string) => {
//     return new Promise((resolve: any, reject: any) => {
//         readFile(path, 'utf8', (err: any, res: any) => {
//             if (err) {
//                 console.log(err, "err");
//                 reject(err)
//             }
//             console.log(res);
//             resolve(res)
//         })
//     })
// }

const fun1 = async () => {
    try {
        const data = await readPro('./extra/data1.txt','utf8');
        await writePro('./extra/res.txt',`${data}`);
        console.log(data);
    } catch (error: any) {
        console.log(error, "Err");
    }
}

// fun1()

// readText('./extra/data1.txt').then((res:any)=>{console.log(res)}).catch((err:any)=>{console.log(err);
// })



// events

const eve = new EventEmitter()
eve.on('fire',(actor:string,acteress:string)=>{
    console.log("best couple ",actor," and ",acteress);
})

eve.emit('fire',"joe","love")




server.listen(3000, () => { 
    console.log("Server is Running at port 3000");
})