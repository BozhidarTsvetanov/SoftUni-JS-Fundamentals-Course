function palindromeIntegers(array) {
    
for (let index = 0; index < array.length; index++) {
    let number = array[index];
    let strOfNum = String(number)
        
        let strOfNumRevers = strOfNum.split('').reverse(). join('')

        if (strOfNum === strOfNumRevers) {
            console.log('true');
            
        }else{
            console.log('false');
            
        }

        
    }

}
palindromeIntegers([32,2,232,1010])
