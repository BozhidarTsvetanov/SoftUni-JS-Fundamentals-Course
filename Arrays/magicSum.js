function magicSum(array, sumNumber) {
    
for (let i = 0; i < array.length; i++) {
    let currentNum = array[i]
    
    for (let j = i + 1; j < array.length; j++) {
        let numToRight = array[j]
        
        if (currentNum + numToRight === sumNumber) {
            console.log(currentNum, numToRight);
            
        }
    }
}

}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
