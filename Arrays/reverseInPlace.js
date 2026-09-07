function reverseInPlace(stringArr) {
    
for (let i = 0; i < stringArr.length / 2 ; i++) {
    
    let reversed = stringArr.length -1 -i;
    let value = stringArr[i]
    let secondValue = stringArr[reversed]
    
    stringArr[i ] = secondValue
    stringArr[reversed] = value
}
console.log(stringArr.join(' '));

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
