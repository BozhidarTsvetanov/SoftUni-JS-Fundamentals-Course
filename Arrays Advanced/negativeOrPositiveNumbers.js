function negativeOrPositiveNumbers(input) {
let numInput = input.map(Number)
let resolt = []

for (let element of numInput) {

    if (element < 0) {
        resolt.unshift(element)
    }else{
        resolt.push(element)
    }
    
    
}

for (let index = 0; index < resolt.length; index++) {
    
    console.log(resolt[index]);
    
    
}

 
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
