function dungeonestDark(input) {
let health = 100;
let totalCoins = 0;
let rooms = input.split("|")
let roomCount = 1;
for (let room of rooms) {
    let [entity, number] = room.split(" ")
    number = Number(number) 
    if (entity === 'potion') {
        let healtGained = number
        
        if (health + healtGained > 100) {
            healtGained = 100 - health
            
        }
        health += healtGained 
        console.log(`You healed for ${healtGained} hp.`);
        console.log(`Current health: ${health} hp.`);
        
    }else if (entity === 'chest') {
        let coins = number
        totalCoins += coins
        console.log(`You found ${coins} coins.`);
        

    }else{
        let monstarName = entity
        let attack = number
        health -= number

        if (health > 0) {
            console.log(`You slayed ${monstarName}.`);
        }else{
            console.log(`You died! Killed by ${monstarName}.`);
            console.log(`Best room: ${roomCount}`);
            return;
        }
    }
     roomCount++  
}
console.log("You've made it!");
console.log(`Coins: ${totalCoins}`);
console.log(`Health: ${health}`);

}
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
