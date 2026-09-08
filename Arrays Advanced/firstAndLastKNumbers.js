function firstAndLastKNumbers(input) {
let k = input.slice(0, 1)
let firstNums = []
let lastNums = []  

function findeFirstK(x) {
    
for (let index = 1; index <= k; index++) {
    let element = input[index]  
    firstNums.push(element)
    
}
return firstNums

}
function findeLastK(y) {
    for (let index = input.length - k; index < input.length; index++) {
        let element = input[index];
        lastNums.push(element)
    }
    return lastNums
}

console.log(findeFirstK(input).join(' '));
console.log(findeLastK(input).join(' '));


}
firstAndLastKNumbers([3,

6, 7, 8, 9])
