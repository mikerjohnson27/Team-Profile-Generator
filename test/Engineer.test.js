const Employee = require("../lib/employee_class");
const Engineer = require("../lib/manager_class");

const Employee_Test = require("../test/Employee.test.js");
const Engineer_Test = require("../test/Engineer.test.js");

Engineer_Test () => {
    describe(getName, getID, getEmail, getGithub, getRole {
        describe("identification" {
            it("needs to have a name," + "a employee ID and email address and github account"{
                let Engineer = new Engineer = ("first last", 15422, "first.last@mrjtechinc.com", "firstlast", "Engineer"),
                expect(getName()).toEqual("first last"),
                expect(getID()).toEqual(15422),
                expect(getEmail()).toEqual("first.last@mrjtechinc.com"),
                expect(getGithub()).toEqual("firstlast"),
                expect(getRole()).toEqual("Engineer"),
            })
        })
    })
};
    
       
    

module.exports = Engineer_Test
module.exports = Employee_Test

module.exports = Engineer
module.exports = Employee