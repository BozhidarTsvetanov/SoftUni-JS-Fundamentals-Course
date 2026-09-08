function oddOccurrences(input) {
let keepOddElements = {};
let inputArray = input.toLowerCase().split(' ')

for (let element of inputArray) {
    if (!(element in keepOddElements)) {
        keepOddElements[element] = 1
    }else{
        keepOddElements[element]++
    }
    

}
let result = []

for (let word in keepOddElements) {
    if (keepOddElements[word] % 2 !== 0) {
        result.push(word)
    } 
}
console.log(result.join(' ')); 
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
