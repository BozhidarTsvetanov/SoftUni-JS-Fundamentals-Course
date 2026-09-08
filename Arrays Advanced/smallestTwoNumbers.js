function  smallestTwoNumbers(input) {
let sorted = input.sort((a, b) => {
    return a - b
})
let twoSmallestNums = sorted.slice(0, 2)
console.log(twoSmallestNums. join(' '));

}
smallestTwoNumbers([30, 15, 50, 5])
