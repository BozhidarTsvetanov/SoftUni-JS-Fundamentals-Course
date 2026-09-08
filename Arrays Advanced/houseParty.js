function houseParty(input) {
    let list = [];

    for (let index = 0; index < input.length; index++) {
        let people = input[index].split(' ');
        let name = people[0];

        if (!people.includes('not')) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            if (list.includes(name)) {
                let position = list.indexOf(name);
                list.splice(position, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(list.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
