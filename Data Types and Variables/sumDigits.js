function sumDigits(number) {
    let sum = 0
    let stringNum = String(number)
    for (let digits of stringNum) {
        let digitsNum = Number(digits)
        sum += digitsNum

    }
    console.log(sum);


}
sumDigits(543)
