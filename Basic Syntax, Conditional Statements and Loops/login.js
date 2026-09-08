function login (input) {
    
let index = 0;
let username = input[index]
index++
let correctPassword = username.split('').reverse().join('')
let incorrectCounter = 1; 

while (input[index] !== correctPassword) {
   
    
    if (incorrectCounter >= 4) {
        console.log(`User ${username} blocked!`);
        return;
    }
    console.log("Incorrect password. Try again.")
    index++
    incorrectCounter++
}
if (input[index] === correctPassword) {
    console.log(`User ${username} logged in.`);
    
}

}
login(['sunny','rainy','cloudy','sunny','notsunny'])
