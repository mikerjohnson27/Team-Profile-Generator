discribe("Manager", () => {
    discribe("identification", () => {
        it("needs to have a name," + "a employee ID and email address", () => {
            const manager = new manager ("first last", 15422, "first.last@mrjtechinc.com", 2332)
            expect(manager.getName()).toEqual("first last");
            expect(manager.getID()).toEqual(15422);
            expect(manager.getEmail()).toEqual("first.last@mrjtechinc.com");
            expect(manager.officeNumber()).toEqual(2332);
            expect(manager.getRole()).toEqual("Manager");
        })
    })
})