function maxNumber(array) {
let topNumArr = []

for (let i = 0; i < array.length; i++) {
    let intiger = array[i]
    let topNum = true

    for (let j = i + 1; j < array.length; j++) {
        let numToRight = array[j]

        if (intiger <= numToRight) {
            topNum = false;
            break;

        }
    }
    if (topNum === true) {
        topNumArr.push(intiger)
    }
}
console.log(topNumArr.join(' '));
}
maxNumber([1, 4, 3, 2])
