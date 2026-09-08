function passwordReset(input) {
let password = input.shift()
let command = input.shift()

while (command !== 'Done') {
    let tokens = command.split(' ')
    let action = tokens.shift()

    if (action === 'TakeOdd') {
        let newPass = ''
        for (let index = 1; index < password.length; index += 2) {
            newPass += password[index]
        }
        password = newPass
        console.log(password);
        
    }else if (action === 'Cut') {
        let [index, length] = tokens.map(Number)
        let substring = password.substring(index, index + length)
        password = password.replace(substring, '')
        console.log(password);

    }else if (action === 'Substitute') {
        let [substring, substitute] = tokens
        if (password.includes(substring)) {
            password = password.split(substring).join(substitute)
            console.log(password);
            
        }else{
            console.log("Nothing to replace!");
            
        }

    }

    command = input.shift()
}

console.log(`Your password is: ${password}`);


}passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
)
