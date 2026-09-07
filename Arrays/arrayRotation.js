function arrayRotation(array, rotations) {
    for (let index = 1; index <= rotations; index++) {
        let first = array.shift()
        array.push(first)
        
    }
console.log(array.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2)
