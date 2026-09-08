function movingTarget(input) {
    let sequenceOfTargets = input.shift().split(' ').map(Number);

    for (let element of input) {
        let [command, num1, num2] = element.split(' ');
        num1 = Number(num1);
        num2 = Number(num2);

        if (command === "End") {
            console.log(sequenceOfTargets.join('|'));
            return;
        }

        switch (command) {
            case 'Shoot':
                if (num1 >= 0 && num1 < sequenceOfTargets.length) {
                    let value = sequenceOfTargets[num1] - num2;

                    if (value <= 0) {
                        sequenceOfTargets.splice(num1, 1);
                    } else {
                        sequenceOfTargets[num1] = value;
                    }
                }
                break;

            case 'Add':
                if (num1 < 0 || num1 >= sequenceOfTargets.length) {
                    console.log("Invalid placement!");
                } else {
                    sequenceOfTargets.splice(num1, 0, num2);
                }
                break;

            case 'Strike':
                if (
                    num1 - num2 >= 0 &&
                    num1 + num2 < sequenceOfTargets.length
                ) {
                    for (let index = num1 + num2; index >= num1 - num2; index--) {
                        sequenceOfTargets.splice(index, 1);
                    }
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
    }
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
