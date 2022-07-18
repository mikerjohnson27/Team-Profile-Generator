const Employee = require("../lib/employee_class");
const Intern = require("../lib/manager_class");

const Employee_Test = require("./Employee.test.js");
const Intern_Test = require("./Intern.test.js");

function Intern_Test(){
    describe(Intern, getName(), getID(), getEmail(), getSchool(), getRole(), () => {
        describe("identification", () => {
            it("needs to have a name," + "a employee ID and email address and github account", () => {
                const Intern = new Intern ("first last", 15422, "first.last@mrjtechinc.com", "University of NH", "Intern")
                expect(Intern.getName()).toEqual("first last");
                expect(Intern.getID()).toEqual(15422);
                expect(Intern.getEmail()).toEqual("first.last@mrjtechinc.com");
                expect(Intern.getSchool()).toEqual("University of NH");
                expect(Intern.getRole()).toEqual("Intern");
            })
        })
    })
    
};


module.exports = Employee_Test
module.exports = Intern_Test

module.exports = Employee
module.exports = Intern