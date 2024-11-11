//error message,error code,status code,error

class HttpException extends Error{
constructor(message,erroCode,statusCode,error){
    super(message);
    this.message=message;
    this.erroCode=erroCode;
    this.statusCode=statusCode;
    this.error=error;
}
}
