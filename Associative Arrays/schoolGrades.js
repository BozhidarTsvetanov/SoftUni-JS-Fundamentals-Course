function schoolGrades(input) {
    let map = new Map()
    let sum = 0
    let average = 0
    for (let element of input) {
        let [name, ...grades] = element.split(' ')
        
        if (map.has(name)) {
            let newGrades = map.get(name)
            grades = grades.concat(newGrades);
            map.set(name, grades)
        } else {
            map.set(name, grades)
        }
        
    }
    for (let [name, grades] of map) {
        for (let element of grades) {
            sum += Number(element)
        }
        average = sum/grades.length
        sum = 0
        map.set(name, average)
    }
        let arr = Array.from(map.entries())
        arr.sort((a,b) => a[0].localeCompare(b[0]))
        
        for (let [name, average] of arr) {
            console.log(`${name}: ${average.toFixed(2)}`);
        }
        
}          
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])
