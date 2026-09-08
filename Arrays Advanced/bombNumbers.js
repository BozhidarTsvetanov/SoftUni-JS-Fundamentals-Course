function bombNumbers(sequence, bomb) {
let bombNum = bomb.shift()
let power = bomb.shift()
let sum = 0

for (let index = 0; index < sequence.length; index++) {
    let element = sequence[index]

    if (element === bombNum) {
        let bombIndex = sequence.indexOf(bombNum)

    for (let j = bombIndex - power; j <= bombIndex + power; j++) {
        sequence.splice(bombIndex - power, 1);

    }
    
    }
    
}
for (let index = 0; index < sequence.length; index++) {
    let element = sequence[index];
    sum += element

}
console.log(sum);

}
bombNumbers([1, 1, 2, 1, 1, 1,

2, 1, 1, 1],

[2, 1])
