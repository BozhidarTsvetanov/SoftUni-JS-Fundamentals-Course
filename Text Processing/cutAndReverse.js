function cutAndReverse(input) {
    let reversInput = input.split('').reverse().join('')
    let middle = reversInput.length / 2
    let firstHalf = reversInput.slice(0, middle)
    let secondHalf = reversInput.slice(middle)
    
    console.log(secondHalf);
    console.log(firstHalf);
    
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
