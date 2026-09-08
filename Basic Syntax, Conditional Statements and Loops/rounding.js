function rounding(num, desimalPrecision) {
    
if (desimalPrecision > 15) {
    desimalPrecision = 15
}


let rounded = num.toFixed(desimalPrecision)
let result = parseFloat(rounded)
console.log(result);


}
rounding(3.1415926535897932384626433832795,2)
