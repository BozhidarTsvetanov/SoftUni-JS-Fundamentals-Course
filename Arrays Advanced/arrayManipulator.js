function arrayManipulator(input) {
    let arr = input.shift().split(' ').map(Number);

    for (let command of input) {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action === 'Add') {
            let number = Number(tokens[1]);
            arr.push(number);

        } else if (action === 'Remove') {
            let number = Number(tokens[1]);
            arr = arr.filter(x => x !== number);

        } else if (action === 'RemoveAt') {
            let index = Number(tokens[1]);
            arr.splice(index, 1);

        } else if (action === 'Insert') {
            let number = Number(tokens[1]);
            let index = Number(tokens[2]);
            arr.splice(index, 0, number);
        }
    }

    console.log(arr.join(' '));
}
arrayManipulator
(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])
