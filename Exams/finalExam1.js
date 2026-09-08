function stringGame(input) {
    let theString = input.shift()
    let command = input.shift()

    while (command !== 'Done') {
        let tokens = command.split(' ')
        let action = tokens.shift()

        if (action === 'Change') {
            let char = tokens.shift()
            let replacement = tokens.shift()

            theString = theString.split(char).join(replacement)
            console.log(theString);

        }else if (action === 'Includes') {
            let substring = tokens.shift()

            if (theString.includes(substring)) {
                console.log('True');
                
            }else{
                console.log('False');
                
            }
        }else if (action === 'End') {
            let substring = tokens.shift()

            if (theString.endsWith(substring)) {
                console.log('True');
                
            }else{
                console.log('False');
                
            }
        
            
            
        }else if (action === 'Uppercase') {
            theString = theString.toUpperCase()
            console.log(theString);
            
        }else if (action === 'FindIndex') {
            let index = (tokens.shift())

            let findIndex = theString.indexOf(index)
            console.log(findIndex);
            
        }else if (action === 'Cut') {
            let startIndex = Number(tokens.shift())
            let count = Number(tokens.shift())
            let substring = theString.substring(startIndex, count + startIndex)
            console.log(substring);
            theString = theString.replace(substring, '')
            
            
        }

        command = input.shift()
    }
    
}
stringGame((["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])
)
