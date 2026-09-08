function aMinerTask(input) {
    let matirials = {}

    for (let index = 0; index < input.length; index += 2) {
        let matirial = input[index];
        let quantity = input[index + 1]
        quantity = Number(quantity)
        
        if (!(matirial in matirials)) {
            matirials[matirial] = 0
        }
            matirials[matirial] += quantity 
        
    }
    let entries = Object.entries(matirials)
    for (let [matirial, quantity] of entries) {
        console.log(`${matirial} -> ${quantity}`);
        
    }

}
aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])
