function signCheck(firstNum, secondNum, thirdNum) {
    totalNegativeNUmbers = 0;

    if (firstNum < 0 ) {
        totalNegativeNUmbers++
    }
    if (secondNum < 0 ) {
        totalNegativeNUmbers++
    }
    if (thirdNum < 0) {
        totalNegativeNUmbers++
    }
    if (totalNegativeNUmbers === 3 || totalNegativeNUmbers === 1) {
        console.log('Negative');
        
    }else{
        console.log('Positive');
        
    }
}
signCheck(5, 12, -15)
