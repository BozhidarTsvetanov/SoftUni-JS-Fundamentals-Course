function calculator(num1, operator, num2) {
    
let resolt = 0
switch (operator) {
    case '+':
        resolt = num1 + num2
        break;
    case '-':
        resolt = num1 - num2
        break;
    case '*':
        resolt = num1 * num2
        break;
    case '/':
        resolt = num1 / num2
        break;
    
}
console.log(resolt.toFixed(2));


}
calculator(5, '+', 10)
