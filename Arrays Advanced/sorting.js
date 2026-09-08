function sorting(input) {
let sorted = input.sort((a, b)=> a - b)
let finalArray = []

while (sorted.length > 0) {
    
    let biggestNum = sorted.pop()
    finalArray.push(biggestNum)

    let smallestNum = sorted.shift()
    finalArray.push(smallestNum)
}

console.log(finalArray.join(' '));

}
sorting([34, 2, 32, 45, 690, 6, 32,

7, 19, 47])
