function softUniReception(input,  ) {
let employee1 = Number(input[0])
let employee2 = Number(input[1])
let employee3 = Number(input[2])
let studentCount = Number(input[3])

let studentsPerHour = employee1 + employee2 + employee3
let hourCounter = 0;

while (studentCount > 0) {
    hourCounter++

    if (hourCounter % 4 === 0) {
        hourCounter++
    }
    studentCount -= studentsPerHour
}

console.log(`Time needed: ${hourCounter}h.`);


}
softUniReception(['5',
'6',
'4',
'20'])
