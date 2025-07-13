export default (myErroFun)=>(req,res,next)=>{
    Promise.resolve(myErroFun(req,res,next)).catch(next)
}