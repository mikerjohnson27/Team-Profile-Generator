const Manager = require("../lib/manager_class");

describe("Manager", () => {
    describe("identification", () => {
        it("needs to have a name," + "a employee ID and email address and office number", () => {
            const manager = new manager ("first last", 15422, "first.last@mrjtechinc.com", 2332)
            expect(manager.getName()).toEqual("first last");
            expect(manager.getID()).toEqual(15422);
            expect(manager.getEmail()).toEqual("first.last@mrjtechinc.com");
            expect(manager.officeNumber()).toEqual(2332);
            expect(manager.getRole()).toEqual("Manager");
        })
    })
})
module.exports = Manager