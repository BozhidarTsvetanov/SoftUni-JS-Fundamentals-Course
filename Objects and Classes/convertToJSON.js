function convertToJSON(firstName, lastName, hairColor) {
let person = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor 

}
let personToJSON = JSON.stringify(person)
console.log(personToJSON);

}
convertToJSON('George', 'Jones',

'Brown')
