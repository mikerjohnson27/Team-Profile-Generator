class Intern {
    constructor(name, email, id, role, school) {
      this.name = name;
      this.email = email;
      this.id = id;
      this.school = school;
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
    getSchool() {
      return this.school
    }
    getRole() {
      return "Intern";
    }
};
module.export = Intern;