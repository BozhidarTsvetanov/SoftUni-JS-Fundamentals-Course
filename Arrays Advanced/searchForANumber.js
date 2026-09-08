function searchForANumber(array, comandArray) {
let takeElements = comandArray.shift()
let removeElements = comandArray.shift()
let searchNumber = comandArray.shift()
let counter = 0

let newArr = array.slice(0, takeElements)
newArr.splice(0, removeElements)

for (let element of newArr) {

    if (element === searchNumber) {
        counter++
    }
}
console.log(`Number ${searchNumber} occurs ${counter} times.`);


}
searchForANumber([5, 2, 3, 4, 1, 6],
[5, 2, 3])
