function secretChat(input) {
let concealedMessage = input.shift()
let command = input.shift()

while (command !== 'Reveal') {
    let [action, token1, token2] = command.split(':|:')
    if (action === 'InsertSpace') {
        token1 = Number(token1)
        concealedMessage = concealedMessage.slice(0, token1) + ' ' + concealedMessage.slice(token1, concealedMessage.length)
        console.log(concealedMessage);
        
    }else if (action === 'Reverse') {
        if (concealedMessage.includes(token1)) {
            concealedMessage = concealedMessage.replace(token1,'')
            let reversed = token1.split('').reverse().join('')
            concealedMessage = concealedMessage + reversed
            console.log(concealedMessage);
        }else{
            console.log('error');
            
        }
    
    }else if (action === 'ChangeAll'){
        concealedMessage = concealedMessage.split(token1).join(token2)
        console.log(concealedMessage);
        
    }

    command = input.shift()
}
if (command === 'Reveal') {
    console.log(`You have a new text message: ${concealedMessage}`);
    
}

}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
])
