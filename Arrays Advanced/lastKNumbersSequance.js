function lastKNumbersSequance(n, k) {
let arr = [1]

for (let i = 1; i < n; i++) {
    let startI = i - k

    if (startI < 0 ) {
        startI = 0
    }
    let previosThree = arr.slice(startI, i)
    let sum = 0

    for (let nums of previosThree) {
        sum += nums
    }
    arr[i] = sum
}
console.log(arr.join(' '));

}
lastKNumbersSequance(6, 3)
