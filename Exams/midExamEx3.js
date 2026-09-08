function phoneShop(input) {
let listOfPhones = input.shift().split(', ')

for (let element of input) {
    let [command, newPhone] = element.split(' - ')

    while (command !== 'End') {
        
        if (command === 'Add') {
            
            if (listOfPhones.includes(newPhone)) {
                break;
            }else{
                listOfPhones.push(newPhone)
                
            }
            break;
        }
        if (command === 'Remove') {
            
            if (listOfPhones.includes(newPhone)) {
                let index = listOfPhones.indexOf(newPhone)
                listOfPhones.splice(index, 1)
                
            }else{
                break;
            }
            break;
        }
        if (command === 'Bonus phone') {
            let [oldPhone, newPhoneBonus] = newPhone.split(':')
            if (listOfPhones.includes(oldPhone)) {
                let index = listOfPhones.indexOf(oldPhone)
                listOfPhones.splice(index + 1, 0, newPhoneBonus)
               
            }else{
                break;
            }   
            break;
        }
        if (command === 'Last') {
            if (listOfPhones.includes(newPhone)) {
                let index = listOfPhones.indexOf(newPhone)
                listOfPhones.splice(index, 1)
                listOfPhones.push(newPhone)
                
            }else{
                break;
            }
            break;
        }

    }
    if (command === 'End') {
        console.log(listOfPhones.join(', '));
        
    }

}

}
phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])
