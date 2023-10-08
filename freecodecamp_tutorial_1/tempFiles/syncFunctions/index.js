const {readFileSync,writeFileSync} = require('fs');


// read file synchronously
const data1 = readFileSync("./data.txt","utf8");
console.log(data1);

const data2 = readFileSync("./data2.txt","utf8");
console.log(data2);

// write file asynchronously
writeFileSync("./total.txt",
`\nResult: ${data1} and  ${data2} /n`,{flag:'a'}  )