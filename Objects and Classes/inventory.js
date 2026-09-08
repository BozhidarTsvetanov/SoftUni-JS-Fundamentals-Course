function inventory(input) {
    heros = []
for (let element of input) {
    let [name, level, items] = element.split(' / ')
    level = Number(level)

    let obj = {
        name: name,
        level: level,
        items: items
    }
    heros.push(obj)
}
heros.sort((a, b) => a.level - b.level)

for (let element of heros) {
    console.log(`Hero: ${element.name}`);
    console.log(`level => ${element.level}`);
    console.log(`items => ${element.items}`);
    
}

}
inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])
