class Manager{
    constructor(employeeName, email, id, role, officeNumber) {
      this.employeeName = employeeName;
      this.email = email;
      this.id = id;
      this.role = role;
      this.officeNumber = officeNumber;
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
      return "Manager";
    }
    getofficeNumber() {
      return this.officeNumber;
    }
};
module.export = Manager;