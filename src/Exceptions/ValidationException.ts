
import HttpException from "./HttpException";
 
//Validation exception handler
class ValidationException extends HttpException {
  constructor(message: string) {
    super(422, `${message} `);
  }
}
 
export default ValidationException;