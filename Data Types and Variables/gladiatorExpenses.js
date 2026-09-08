function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
let totalPrice = 0;
let shieldBrockeCount = 0;
for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
if (currentFight % 2 === 0) {
    totalPrice += helmetPrice
}    
if (currentFight % 3 === 0) {
    totalPrice += swordPrice
}
if (currentFight % 2 === 0 && currentFight % 3 === 0) {
    totalPrice += shieldPrice
    shieldBrockeCount++
}
if (shieldBrockeCount >= 2) {
    totalPrice += armorPrice
    shieldBrockeCount = 0
}
}
console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}
gladiatorExpenses(7,
2,
3,
4,
5)
