class CustomError extends Error {
    statusCode : Number
    constructor(message:string,statusCode:Number) {
        super(message);
        this.message = message
        this.statusCode = statusCode
    }
}
export default CustomError;