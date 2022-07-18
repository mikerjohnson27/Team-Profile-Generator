const Employee_Test = require("./Engineer.test");
const Engineer_Test = require("./Employee.test");
const Manager_Test = require("./Manager.test");
const Intern_Test = require("./Intern.test");

const Employee = require(module.exports.Employee);
const Manager = require('../Team-Profile-Generator/lib/manager_class');
const Engineer = require('../Team-Profile-Generator/lib/engineer_class');
const Intern = require('../Team-Profile-Generator/lib/intern_class');

Employee_Test = () =>{
    describe(this.Employee, getName(), getID(), getEmail(), () => {
        describe("identification", () => {
            it("needs to have a name," + "a employee ID and email address and github account", () => {
                const Employee = new Employee ("first last", 15422, "first.last@mrjtechinc.com")
                expect(this.Employee.getName()).toEqual("first last");
                expect(this.Employee.getID()).toEqual(15422);
                expect(this.Employee.getEmail()).toEqual("first.last@mrjtechinc.com");
            })
        })
    })
    
};
module.exports = Employee_Test
module.exports = Engineer_Test
module.exports = Intern_Test
module.exports = Manager_Test