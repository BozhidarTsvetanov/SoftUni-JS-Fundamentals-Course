function addAndSubtract(arr) {
let newArr = []
let sumOfArr = 0;
let sumOfNewArr = 0;
for (let index = 0; index < arr.length; index++) {
    let element = arr[index]
    sumOfArr += element
    if (element % 2 === 0) {
        element += index
        newArr.push(element) 
    }else{
        element -= index
        newArr.push(element) 
    }
    sumOfNewArr += element
}
console.log(newArr);
console.log(sumOfArr);
console.log(sumOfNewArr);
}
addAndSubtract([5, 15, 23, 56, 35])
