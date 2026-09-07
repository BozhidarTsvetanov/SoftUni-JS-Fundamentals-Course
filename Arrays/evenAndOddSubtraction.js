function evenAndOddSubtraction(input) {
    
let oddSum = 0;
let evenSum = 0;


for (let index = 0; index < input.length; index++) {
    let num = input[index]
    if (num % 2 === 0) {
        evenSum += num
    }else{
        oddSum += num
    }
    
}
let result = evenSum - oddSum;
console.log(result);

}
evenAndOddSubtraction([1,2,3,4,5,6])
