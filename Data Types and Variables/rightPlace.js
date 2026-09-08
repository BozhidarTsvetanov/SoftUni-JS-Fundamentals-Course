function rightPlace(missingChar, char, correctWord) {
    missingChar = missingChar.replace('_', char)
    if (missingChar === correctWord) {
        console.log("Matched");
        
    }else{
        console.log("Not Matched");
        
    }
    
}
rightPlace('Str_ng', 'I', 'Strong')
