const Employee = require("../lib/employee_class")
const Engineer = require("../lib/manager_class")
const Intern = require("../lib/employee_class")
const Manager = require("../lib/manager_class")

const Employee_Test = require("./Engineer.test");
const Engineer_Test = require("./Employee.test");
const Manager_Test = require("./Manager.test");
const Intern_Test = require("./Intern.test");


Employee_Test = () =>{
    describe(Employee, getName(), getID(), getEmail(), () => {
        describe("identification", () => {
            it("needs to have a name," + "a employee ID and email address and github account", () => {
                const Employee = new Employee ("first last", 15422, "first.last@mrjtechinc.com")
                expect(Employee.getName()).toEqual("first last");
                expect(Employee.getID()).toEqual(15422);
                expect(Employee.getEmail()).toEqual("first.last@mrjtechinc.com");
            })
        })
    })
    
};
module.exports = Employee_Test
module.exports = Engineer_Test
module.exports = Intern_Test
module.exports = Manager_Test

module.exports = Employee
module.exports = Engineer
module.exports = Manager
module.exports = Intern 
