function simpleCalculator(firstNum, secondNum, operator) {
let operations = {
multiply: (firstNum, secondNum) => firstNum * secondNum,
divide: (firstNum, secondNum) => firstNum / secondNum,
add: (firstNum, secondNum) => firstNum + secondNum,
subtract: (firstNum, secondNum) => firstNum - secondNum,
};

return operations[operator](firstNum, secondNum);
}
console.log(simpleCalculator(5, 5, 'multiply'));
