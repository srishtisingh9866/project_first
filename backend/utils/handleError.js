class HandleError extends Error{
    constructor (message,statusCode){
        super(message);
        this.statusCode=statusCode;//capture stack trace of the error
        Error.captureStackTrace(this,this.constructor)
    }
}
 export default HandleError;