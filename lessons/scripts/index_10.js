console.log('last day')

async () => {
    await fetch('https//www.lemonde.fr')
}

class Car {
    constructor(modelParam, brandParam, yearParam) {
        this.model = modelParam
        this.brand = brandParam
        this.year = yearParam
    }
}

let berlingo = new Car("Berlingo", "Citroën", 2014)
let kangoo = new Car("Kangoo", "Renault", 2012)


// Destructuration de données, DESTRUCTURING

let person = {
    firstname: "Paul",
    lastname: "Doazan",
    age: 35
}

// let firstname = person.firstname
// let lastname = person.lastname
// let age = person.age
let { firstname } = person
firstname += "ine"

console.log(firstname)

const numbers = [1, 2, 3, 4, 5]

const [nb1, nb2, ...restNumbers] = numbers
console.log(restNumbers);
