function oddAndEvenSum(number) {
let stringOfNum = String(number)
let sumOfOddNums = 0;
let sumOfEvenNums = 0;

function sumOfOdd(number) {

    for (let index = 0; index < stringOfNum.length; index++) {
        let el = number[index]
        el = Number(el)
        
        if (el % 2 === 1) {
            sumOfOddNums += el
        }
        
    }
    return sumOfOddNums;
}
function sumOfEven(number) {

    for (let index = 0; index < stringOfNum.length; index++) {
        
        let el = number[index]
        el = Number(el)
        
        if (el % 2 === 0) {
            sumOfEvenNums += el
        }
        
    }
    return sumOfEvenNums;
}

console.log(`Odd sum = ${sumOfOdd(stringOfNum)}, Even sum = ${sumOfEven(stringOfNum)}`);


}
oddAndEvenSum(1000435)
