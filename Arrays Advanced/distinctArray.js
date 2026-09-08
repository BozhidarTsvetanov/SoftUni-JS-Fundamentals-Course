function distinctArray(input){
let uniqueArr = []
for (let element of input) {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element)
    }


}
console.log(uniqueArr.join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3,
4, 1, 2])
