function processOddNumbers(arr) {
let newArr = []
for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (i % 2 === 1 ) {
        newArr.push(element)
    }
    
}
let double = newArr.map(nums => nums * 2)
let reverst = double.reverse()
console.log(reverst.join(' '));


}
processOddNumbers([3, 0, 10, 4, 7, 3])
