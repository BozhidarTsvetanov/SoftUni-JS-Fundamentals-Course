function train(input) {
let wagons = input.shift().split(' ').map(Number)
let maxCapacity = Number(input.shift())

for (let index = 0; index < input.length; index++) {
    let command = input[index]

    if (command.includes('Add')) {
        let token = command.split(' ')
        let passengers = Number(token[1])
        wagons.push(passengers)

    }else{
        let passengers = Number(command)

        for (let j = 0; j < wagons.length; j++) {

            if (wagons[j] + passengers <= maxCapacity) {
                wagons[j] += passengers
                break;
            }
            
        }
    }
    
}
console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
