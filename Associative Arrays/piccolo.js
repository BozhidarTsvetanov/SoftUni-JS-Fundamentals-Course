function piccolo(input) {
    let cars = {}
    for (let element of input) {
        let [direction, carNumber] = element.split(', ')

        if (direction === 'IN') {
            cars[carNumber] = direction
        }
        if (direction === 'OUT') {
            delete cars[carNumber]
        }
    }
    if (Object.keys(cars).length === 0) {
        console.log(`Parking Lot is Empty`);
        return;
    }else{
        let entries = Object.entries(cars).sort((a, b) => a[0].localeCompare(b[0]))
        for (let [carNumber] of entries) {
            console.log(carNumber);
            
        }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
