export const authorize = (req:any,res:any,next:any) =>{
    const {user} = req.query;
    if(user === 'vjd'){
        req.user = {name:"vjd",id:18}
        next()
    }else{
        res.status(401).send("Unauthorized")
    }
}