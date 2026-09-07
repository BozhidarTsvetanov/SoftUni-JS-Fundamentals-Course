function maxSequenceOfEqualElements(input) {
    let bestSequence = [input[0]];
    let currentSequence = [input[0]];

    for (let index = 1; index < input.length; index++) {
        let currentNum = input[index];

        if (currentNum === currentSequence[0]) {
            currentSequence.push(currentNum);
        } else {
            currentSequence = [currentNum];
        }

        if (currentSequence.length > bestSequence.length) {
            bestSequence = [...currentSequence];
        }
    }

    console.log(bestSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
