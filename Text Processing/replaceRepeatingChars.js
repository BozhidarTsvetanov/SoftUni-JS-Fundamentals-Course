function replaceRepeatingChars(input) {
    let uniqueString = ''
    for (let i = 0; i < input.length; i++) {
        
        if (input[i] !== input[i - 1]) {
            uniqueString += input[i]
        }
    }
    
    console.log(uniqueString);
    
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
