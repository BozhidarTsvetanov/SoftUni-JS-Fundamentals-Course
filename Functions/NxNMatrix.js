function NxNMatrix(number) {
let count = 0;
let count2 = 0;

while (count < number) {
    let line = ''
    count++
    count2 = 0
    while (count2 < number) {
        line += `${number} `
        count2++
    }
  console.log(line);  
}


}
NxNMatrix(3)
