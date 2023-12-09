class ApiError extends Error{
    constructor(
        statusCode,
        message= "somthing went wrong",
        errors =[],
        statck=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null// what is in this.data file read it 
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
           this.stack =stack
        }else{
           Error.captureStackTrace(this,thi.constructor)
        }
    }

}
export{ApiError}