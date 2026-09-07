function equalSums(input) {

for (let i = 0; i < input.length; i++) {
    let sumOfRight = 0;
    let sumOfLeft = 0; 
    
    for (let j = 0 ; j < i; j++) {
        sumOfLeft += input[j]
        
    }
    for (let j = i + 1; j < input.length; j++) {
        sumOfRight += input[j]
        
    }
    
    if (sumOfLeft === sumOfRight) {
        console.log(i);
        return;
    }
}
console.log('no');


}
equalSums([1, 2, 3, 3])
