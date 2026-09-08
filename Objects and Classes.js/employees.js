function employees(input) {
for (let element of input) {
    let number = element.length
    let employeesObj = {
        name: element,
        number: number
    }
    console.log(`Name: ${employeesObj.name} -- Personal Number: ${(employeesObj.number)}`);
    
}

}
employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])
