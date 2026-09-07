function reverseAnArrayOfNumbers(n, originalArr) {

let newArr = [];

for (let i = 0; i < n; i++) {
    let oldValue = originalArr[i];
    newArr[i] = oldValue;

}
let reversedArr = [];

for (let i = 0; i < newArr.length; i++) {
    let currentValue = newArr[i]
    reversedArr[newArr.length -1 -i] = currentValue 
    
}
console.log(reversedArr.join(' '));



}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
