function factorialDivision(number1, number2) {
let factorial1 = 1;
let factorial2 = 1;

function findFactorial1(number1) {
    for (let index = 1; index <= number1; index++) {
    factorial1 = factorial1 * index

    
}
return factorial1;
}
function findFactorial2(number2) {
    for (let index = 1; index <= number2; index++) {
    factorial2 = factorial2 * index

    
}
return factorial2;
}

let dividsion = findFactorial1(number1) / findFactorial2(number2)
console.log(dividsion.toFixed(2));


}
factorialDivision(5, 2)
