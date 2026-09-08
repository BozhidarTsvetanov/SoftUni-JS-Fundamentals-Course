function repeatString(string, counter) {
let repeatedString = ' '

for (let index = 0; index < counter; index++) {
    repeatedString += string
}

return repeatedString;

}
let repeatedString = repeatString('abc', 3)
console.log(repeatedString);
