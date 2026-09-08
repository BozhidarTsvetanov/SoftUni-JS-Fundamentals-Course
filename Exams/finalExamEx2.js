function bossRush(input) {
    let inputCount = Number(input.shift())
    let pattern = /([|])(?<name>[A-Z]{4,})\1:([#])(?<title>[A-Za-z]+ [A-Za-z]+)\3/g
    

    for (let index = 0; index < inputCount; index++) {
        let match = pattern.exec(input[index])

        if (match) {
        let name = match.groups.name
        let title = match.groups.title
        let strength = name.length
        let armor = title.length
        console.log(`${name}, The ${title}`);
        console.log(`>> Strength: ${strength}`);
        console.log(`>> Armor: ${armor}`);
        
        }else{
            console.log("Access denied!");
            
        }
        
    }

}
bossRush((['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])

)
