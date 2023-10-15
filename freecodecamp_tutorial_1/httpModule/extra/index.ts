const {readFile} = require('fs');

const readText = (path:string) =>{
    return new Promise((resolve:any,reject:any)=>{
        readFile(path,'utf8',(err:any,res:any)=>{
            if(err){
                console.log(err,"err");
            }
            console.log(res);
        })
    })
}

const fun  = async () =>{
    try {
        const data = readFile('./data.txt');
        console.log(data);
    } catch (error:any) {
        console.log(error,"Err");
    }
}

fun()