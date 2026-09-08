function meetings(input) {
    let map = new Map()
    for (let element of input) {
        let [dayOfWeek, name] = element.split(' ')

        if (map.has(dayOfWeek)) {
            console.log(`Conflict on ${dayOfWeek}!`);
            
        } else {
            map.set(dayOfWeek, name)
            console.log(`Scheduled for ${dayOfWeek}`);

        }
        
    }   
    for (let [dayOfWeek, name] of map) {
        console.log(`${dayOfWeek} -> ${name}`);
        
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])
