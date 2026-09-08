function numbers(input) {
input = input.split(' ').map(Number)
let counter = 0;
let total = 0
let newArr = []

for (let element of input) {
    counter++
    total += element

}
let avarage = total / counter
counter = 1

for (let index = 0; index < input.length; index++) {
    
    let element = input[index]
    if (element > avarage && counter <= 5 ) {
        counter++
        newArr.push(element)
    }

    
}
if (newArr.length === 0) {
   console.log('No');
    
}else{
    newArr.sort((a, b) => b - a);
console.log(newArr.join(' '));
}
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
