function worldTour(input) { 
   let allStops = input.shift()
   let command = input.shift()

   while (command !== 'Travel') {
        let tokens = command.split(':')
        let actions = tokens.shift()

        if (actions === 'Add Stop') {
            let index = Number(tokens.shift())
            let string = tokens.shift()
            if (allStops.length > index) {
                allStops = allStops.slice(0, index) + string + allStops.slice(index)
                console.log(allStops);
            }

        }else if (actions === 'Remove Stop') {
            let startIndex = Number(tokens.shift())
            let endIndex = Number(tokens.shift())
            if(allStops.length > startIndex && allStops.length > endIndex){
                allStops = allStops.slice(startIndex, endIndex) + allStops.slice(endIndex)
                console.log(allStops);
                
            }

        }else if (actions === 'Switch') {
            
        }

        command = input.shift()
   }
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
