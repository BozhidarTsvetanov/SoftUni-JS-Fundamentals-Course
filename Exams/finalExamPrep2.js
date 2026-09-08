function destinationMapper(input) {
    let pattern = /([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/g
    let destinations = []
    let points = 0

    let match = pattern.exec(input)
    
    while (match) {
        let name = match.groups.name;    
        destinations.push(name)
        points += name.length

        match = pattern.exec(input)
    }
    console.log(`Destinations: ${ destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
    
}
destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))
