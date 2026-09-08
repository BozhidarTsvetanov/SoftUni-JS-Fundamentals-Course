function charactersInRange(ascii1, ascii2) {

let code1 = ascii1.charCodeAt(0)
let code2 = ascii2.charCodeAt(0)
let minCode = Math.min(code1, code2)
let maxCode = Math.max(code1, code2)
let arr = []

for (let i = minCode + 1; i < maxCode; i++) {
    let simbol = arr.push(String.fromCharCode(i))
    
}

console.log(arr.join(' '));

}
charactersInRange('C', '#')
