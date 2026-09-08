function needForSpeedIII(input){
let allCars = Number(input.shift())
let carsStats = {};

for (let index = 1; index <= allCars; index++) {
    let [carModel, mileage, fuel] = input.shift().split('|')
    mileage = Number(mileage)
    fuel = Number(fuel)

    carsStats[carModel] = {mileage, fuel};
}
let command = input.shift()

while (command !== 'Stop') {
    let tokens = command.split(' : ')
    let action = tokens.shift()
    let carModel = tokens.shift()
    let car = carsStats[carModel]

    if (action === 'Drive') {
        let[distance, fuelNeeded] = tokens.map(Number)

        if (car.fuel >= fuelNeeded) {
            car.fuel -= fuelNeeded
            car.mileage += distance
            console.log(`${carModel} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
            
        }else{
            console.log("Not enough fuel to make that ride"); 
        }
        if (car.mileage >= 100000) {
            console.log(`Time to sell the ${carModel}!`);
            delete carsStats[carModel]

        }

    }else if (action === 'Refuel') {
        let fuelToAdd = Number(tokens.shift())

        if (car.fuel + fuelToAdd > 75) {
            fuelToAdd = 75 - car.fuel
        }

        car.fuel += fuelToAdd 
        console.log(`${carModel} refueled with ${fuelToAdd} liters`);
        

    }else if (action === 'Revert') {
        let km = Number(tokens.shift())
        car.mileage -= km
    
        if(car.mileage < 10000){
            car.mileage = 10000
        }else{
            console.log(`${carModel} mileage decreased by ${km} kilometers`);
        }
    }

    command = input.shift()
    
}
if (command === 'Stop') {
    let entries = Object.entries(carsStats)
    for (let [carModel, stats] of entries) {
        console.log(`${carModel} -> Mileage: ${stats.mileage} kms, Fuel in the tank: ${stats.fuel} lt.`);
        
    }
    
}
}
needForSpeedIII([
  '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
])
