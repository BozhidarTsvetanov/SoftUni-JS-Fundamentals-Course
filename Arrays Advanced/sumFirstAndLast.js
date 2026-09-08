function sumFirstAndLast(input) {
let first = input.shift()
let firstNum = Number(first)
let last = input.pop()
let lastNum = Number(last)

let sum = firstNum + lastNum

console.log(sum);

}
sumFirstAndLast(['20', '30', '40'])
