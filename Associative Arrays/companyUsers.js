function companyUsers(input) {
    let companyAndEmployees = {};
    for (let index = 0; index < input.length; index++) {
        let element = input[index];
        let [companyName, id] = element.split(' -> ')

        if (!(companyName in companyAndEmployees)) {
            companyAndEmployees[companyName] = []
            companyAndEmployees[companyName].push(id)
        }else{
            if (companyAndEmployees[companyName].includes(id)) {
                 companyAndEmployees[companyName].splice(index, 1)
            }else{
                companyAndEmployees[companyName].push(id)
            }
            
        }
    }    
    let entries = Object.entries(companyAndEmployees).sort((a, b) => a[0].localeCompare(b[0]))
    for (let [companyName, id] of entries) {
        console.log(companyName);
        for (let element of companyAndEmployees[companyName]) {
            console.log(`-- ${element}`);
            
        }
        
    }
    
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])
