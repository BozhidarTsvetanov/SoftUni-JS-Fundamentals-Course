function printAndSum(startNum, endNum) {
    
let sum = 0;
let output = ""

for (let i = startNum; i <= endNum; i++) {
    output += i + " "
    sum += i
    
}
console.log(output)
console.log(`Sum: ${sum}`);

}
printAndSum(5, 10)
