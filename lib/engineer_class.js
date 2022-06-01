class Engineer {
    constructor(employeeName, email, id, role, github) {
      this.employeeName = employeeName;
      this.email = email;
      this.id = id;
      this.github = github;
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
    getGithub() {
      return this.github;
    }
};
module.export = Engineer;