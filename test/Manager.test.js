const Employee = require("../lib/employee_class");
const Manager = require("../lib/manager_class");

const Employee_Test = require("../test/Employee.test.js")
const Manager_Test = require("../test/Manager.test.js")

function Manager_Test(){
    describe(Employee, getName(), getID(), getEmail(), getGithub(), getRole(), () => {
        describe("identification", () => {
            it("needs to have a name," + "a employee ID and email address and github account", () => {
                const Manager = new Manager ("first last", 15422, "first.last@mrjtechinc.com", 1234, "first last", "Manager")
                expect(Manager.getName()).toEqual("first last");
                expect(Manager.getID()).toEqual(15422);
                expect(Manager.getEmail()).toEqual("first.last@mrjtechinc.com");
                expect(Manager.getOfficeNumber()).toEqual(1234);
                expect(Manager.getRole()).toEqual("Manager");
            })
        })
    })
    
}

module.exports = Employee_Test
module.exports = Manager_Test

module.exports = Employee
module.exports = Manager