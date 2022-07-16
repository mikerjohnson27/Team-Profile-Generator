const Employee_Test = require("../test/Employee.test")
const Engineer_Test = require("../lib/engineer_class");

describe("Engineer", () => {
    describe("identification", () => {
        it("needs to have a name," + "a employee ID and email address and github acount", () => {
            const engineer = new engineer ("first last", 15422, "first.last@mrjtechinc.com", "firstlast")
            expect(engineer.getName()).toEqual("first last");
            expect(engineer.getID()).toEqual(15422);
            expect(engineer.getEmail()).toEqual("first.last@mrjtechinc.com");
            expect(engineer.getGithub()).toEqual("first last")
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})

module.exports = Engineer_Test
module.exports = Employee_Test