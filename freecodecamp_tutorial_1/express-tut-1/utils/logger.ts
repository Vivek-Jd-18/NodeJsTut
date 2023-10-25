export const logger =(req:any,res:any,next:any) => {
    const url = req.url;
    const method = req.method;
    const date = new Date().toUTCString() 
    console.log(method,url,(date));
    next()
}