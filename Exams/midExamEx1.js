function experienceGaining(input) {
let xpNeeded = input.shift()
let countOfBattles = input.shift()
let sum = 0;
let battleCounter = 0;

for (let index = 0; index < countOfBattles; index++) {
    battleCounter++
    let experience = input[index];

    if (battleCounter % 3 === 0) {
        experience = (experience + (experience * 0.15)) 

    }else if (battleCounter % 5 === 0) {
        experience = (experience - (experience * 0.10 ))

    }else if (battleCounter % 15 === 0) {
        experience = (experience + (experience * 0.05)) 
    }
    
    sum += experience

    if (sum >= xpNeeded) {
        console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`);
        return;
    }
}
let moreXpNeeded = xpNeeded - sum
console.log(`Player was not able to collect the needed experience, ${moreXpNeeded.toFixed(2)} more needed.`);


}
experienceGaining(([500,
5,
50,
100,
200,
100,
20])
)
