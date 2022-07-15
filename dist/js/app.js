const Engineer = require("../../lib/engineer_class")
const Intern = require("../../lib/intern_class")
const Manager = require("../../lib/manager_class")

const insert = document.getElementById('Insert-Team')

let HTMLArray = []

function insert(HTMLArray){
    HTMLArray.filter(Manager).push.JSON(Manager.insert)
    HTMLArray.filter(Intern).push.JSON(Intern.insert)
    HTMLArray.filter(Engineer).push.JSON(Engineer.insert)

}

module.exports = HTMLArray
module.exports = insert