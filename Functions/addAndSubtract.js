function addAndSubtract(num1, num2, num3) {
    
let sum = (x, y) => (x + y)
let result = sum(num1, num2)
let subtract = (x, y) => (x - y)
let sub = subtract(result, num3)
console.log(sub);

}
addAndSubtract(23, 6, 10)
