let (module.exports.Employee) = Employee

class Employee {
    constructor(employeeName, email, id, role) {
      this.employeeName = employeeName;
      this.email = email;
      this.id = id;
      this.role = role;
  }
  getName() {
    return this.employeeName;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }

};
module.exports.Employee = Employee;