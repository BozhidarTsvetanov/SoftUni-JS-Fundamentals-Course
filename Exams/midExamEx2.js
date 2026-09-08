function taxCalculator(input) {
input = input[0].split('>>')
let tax = 0;
let sum = 0;

for (let element of input) {
    let [vehicleType, years, kilometers] = element.split(' ')
    years = Number(years)
    kilometers = Number(kilometers)

    switch (vehicleType) {
        case 'family':
            tax = 50
            while (kilometers >= 0) {
                if (kilometers < 3000) {
                    break;
                }
                kilometers -= 3000
                tax += 12 
            }
            for (let index = 0; index < years; index++) {
                tax -= 5
            }
            
            sum += tax
            console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            break;

        case 'heavyDuty':
            tax = 80
            while (kilometers >= 0) {
                if (kilometers < 9000) {
                    break;
                }
                kilometers -= 9000
                tax += 14 
            }
            for (let index = 0; index < years; index++) {
                tax -= 8   
            }
            
            sum += tax
            console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            break;

        case 'sports':
            tax = 100
            while (kilometers >= 0) {
                if (kilometers < 2000) {
                    break;
                }
                kilometers -= 2000
                tax += 18
            }
            for (let index = 0; index < years; index++) {
                tax -= 9
            }
            sum += tax
            console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            break;

        default:
            console.log("Invalid car type.");
            break;
    }

}
console.log(`The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`);

}
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])
