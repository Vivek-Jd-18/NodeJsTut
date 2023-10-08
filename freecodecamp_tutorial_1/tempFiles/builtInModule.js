// const os = require('os')

// // info of user
// console.log(os.userInfo());

// // method returns system uptime
// console.log(os.uptime());

// // 
// const osData = {
//     nmae:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(osData);


const path = require('path')

const filePath = path.join('/demo/','sub','index.txt')

console.log(path.basename(filePath));

const abs = path.resolve(__dirname,'demo','sub','index.txt');

console.log(abs);

