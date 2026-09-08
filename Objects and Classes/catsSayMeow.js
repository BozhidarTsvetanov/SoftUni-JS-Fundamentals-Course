function catsSayMeow(input) {
let catArray = [];

class Cats {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayMeow(){
        console.log(`${this.name}, age ${this.age} says Meow`); 
    }
}
for (let element of input) {
    let[name, age] = element.split(' ')
    let cat = new Cats(name, age);
    catArray.push(cat)
}
for (let element of catArray) {
    element.sayMeow()
}

}
catsSayMeow(['Mellow 2', 'Tom 5'])
