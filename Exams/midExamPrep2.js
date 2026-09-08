function theLift(queue, wagons) {
    let maxSpace = 4;

    for (let index = 0; index < wagons.length; index++) {
        let wagon = wagons[index];

        if (wagon < maxSpace) {
            let freeSpace = maxSpace - wagon;

            if (queue >= freeSpace) {
                wagon += freeSpace;
                queue -= freeSpace;
            } else {
                wagon += queue;
                queue = 0;
            }

            wagons[index] = wagon;
        }
    }

    let isFull = true;

    for (let wagon of wagons) {
        if (wagon < maxSpace) {
            isFull = false;
            break;
        }
    }

    if (queue > 0) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
    } else if (!isFull) {
        console.log(`The lift has empty spots!`);
    }

    console.log(wagons.join(' '));
}

theLift(15, [0, 0, 0, 0]);
