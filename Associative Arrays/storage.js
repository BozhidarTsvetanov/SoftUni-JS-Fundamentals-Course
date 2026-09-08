function storage(input) {
    let map = new Map()

    for (let element of input) {
        let [items, quantity] = element.split(' ')
        quantity = Number(quantity)

        if (map.has(items)) {
            let newQuantity = map.get(items)
            quantity += newQuantity
            map.set(items, quantity)
        }else{
            map.set(items, quantity)
        }
    }
    for (let [items, quantity] of map) {
        console.log(`${items} -> ${quantity}`);
        
    }   
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])
