const Employee = require("../lib/employee_class");

describe("Employee", () => {
    describe("identification", () => {
        it("needs to have a name," + "a employee ID and email address", () => {
            const employee = new Employee ("first last", 15422, "first.last@mrjtechinc.com")
            expect(employee.getName()).toEqual("first last");
            expect(employee.getID()).toEqual(15422);
            expect(employee.getEmail()).toEqual("first.last@mrjtechinc.com");
            expect(employee.getRole()).toEqual("Employee");
        })
    })
})
module.exports = Employee