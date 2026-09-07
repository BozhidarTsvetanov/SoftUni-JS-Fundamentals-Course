function equalArrays(input1, input2) {

    let sum = 0;

    for (let index = 0; index < input1.length; index++) {

        if (input1[index] !== input2[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index.`);
            return;
        }

        sum += Number(input1[index]);
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(
    ['10', '20', '30'],
    ['10', '20', '30']
);

