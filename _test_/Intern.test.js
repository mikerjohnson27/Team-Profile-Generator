discribe("Intern", () => {
    discribe("identification", () => {
        it("needs to have a name," + "a employee ID and email address", () => {
            const intern = new intern ("first last", 15422, "first.last@mrjtechinc.com", "University of New Hampshire")
            expect(intern.getName()).toEqual("first last");
            expect(intern.getID()).toEqual(15422);
            expect(intern.getEmail()).toEqual("first.last@mrjtechinc.com");
            expect(intern.getSchool()).toEqual("University of New Hampshire");
            expect(intern.getRole()).toEqual("Intern");
        })
    })
})