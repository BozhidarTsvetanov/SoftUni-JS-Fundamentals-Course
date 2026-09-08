function echoType(input) {
let tupeOfInput = typeof input
if (tupeOfInput === 'string' || tupeOfInput === 'number') {
    console.log(tupeOfInput);
    console.log(input);
    
}else {
    console.log(tupeOfInput);
    console.log('Parameter is not suitable for printing');
    
}


}
echoType(null)
