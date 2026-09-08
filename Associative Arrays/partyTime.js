function partyTime(input) {

let vipGuests = []
let regular = []
for (let index = 0; index < input.length; index++) {
    let element = input[index];
    
    if (element !== 'PARTY') {
        if (element.length > 0 && element[0] >= '0' && element[0] <= '9') {
            vipGuests.push(element)
        }else{
            regular.push(element)
        }
    }else{
        let indexOfParty = input.indexOf(element)
        input.splice(0, indexOfParty + 1)
        let guestsComing = input
        for (let guest of guestsComing) {
            if (vipGuests.includes(guest)) {
                let index = vipGuests.indexOf(guest);
                vipGuests.splice(index, 1);
            }

            if (regular.includes(guest)) {
                let index = regular.indexOf(guest);
                regular.splice(index, 1);
            }
        }
        let lengthOfGuests = vipGuests.length + regular.length
        console.log(lengthOfGuests);
        console.log(vipGuests.join('\n'));
        console.log(regular.join('\n'));
    }
}
}
partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])
