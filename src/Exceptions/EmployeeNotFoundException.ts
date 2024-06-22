
import HttpException from "./HttpException";


//not found error handler
class EmployeeNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Employee with id ${id} not found`);
  }
}
 
export default EmployeeNotFoundException;