function arrayModifier(input) {
let array = input.shift().split(' ').map(Number)
for (let element of input) {
    let [command, index1, index2] = element.split(' ')
    index1 = Number(index1)
    index2 = Number(index2)

    while (command !== 'end') {

        if (command === 'swap') {
            for (let index = 0; index < array.length; index++) {

                let numberIndex1 = array[index1]
                let numberIndex2 = array[index2]
                array.splice(index1, 1, numberIndex2)
                array.splice(index2, 1, numberIndex1)
                break;
            }
            
        }
        if (command === 'multiply') {
            for (let index = 0; index < array.length; index++) {

                let numberIndex1 = array[index1]
                let numberIndex2 = array[index2]
                let sumOfMultiply = numberIndex1 * numberIndex2
                array.splice(index1, 1, sumOfMultiply)
                break;
            }
        }
        if (command === 'decrease') {
            array = array.map((a, b) => a - 1)
        }
        break;
    }
}
console.log(array.join(', '));



}
arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
])
