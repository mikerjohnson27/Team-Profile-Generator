discribe("Engineer", () => {
    discribe("identification", () => {
        it("needs to have a name," + "a employee ID and email address", () => {
            const engineer = new engineer ("first last", 15422, "first.last@mrjtechinc.com", "firstlast")
            expect(engineer.getName()).toEqual("first last");
            expect(engineer.getID()).toEqual(15422);
            expect(engineer.getEmail()).toEqual("first.last@mrjtechinc.com");
            expect(engineer.getGithub()).toEqual("firstlast")
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})