function sumOfOddNumbers(n) {
    let sum = 0;
    let count = 0;
    let number = 1;

    while (count < n) {
        if (number % 2 === 1) {
            console.log(number);
            sum += number;
            count++;
        }
        number++;
    }

    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)
