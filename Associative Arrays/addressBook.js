function addressBook(input) {
    let map = new Map()
    for (let element of input) {
        let [name, adress] = element.split(':')

        if (map.has(name)) {
            map.set(name, adress)
        }else{
            map.set(name, adress)
        }
    }
    let sorted = Array.from(map.entries())
    sorted.sort((a, b) => a[0].localeCompare(b[0]) )
    for (let [name, adress] of sorted) {
        console.log(`${name} -> ${adress}`);
    }
    
    
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
