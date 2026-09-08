function amazingNumbers(num) {
    
let stringNum = String(num)
let sum = 0
for (let i = 0; i < stringNum.length; i++) {
    sum += Number(stringNum[i])
}
let endNum = String(sum)
if (endNum.includes('9')) {
    console.log(`${num} Amazing? True `);
    
}else{
    console.log(`${num} Amazing? False `);
    
}

}
amazingNumbers(1233)
