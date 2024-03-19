// console.log('start day 9')

const numbers = [3, 2, 4, 5, 6, 7, 3, 21]

// tous sauf le dernier
let total = 0
numbers.map((el, index, arr) => {
    total += el
    // if (index !== arr.length - 1) {
    //     return el + 5
    // } else {
    //     return el
    // }
})

const filteredArray = numbers.filter(el => el > 6)
// console.log(filteredArray)

const names = ["Camille", "Bastien", "Adrien"]
const nbs = [10, 3, 124, 5, 2, 4]
names.sort()
nbs.sort((a, b) => {
    return b - a
})

const firstnames = ["Camille", "Bastien", "Adrien", ["Dan", "Claude", ["Maëva"]]]
const flatArray = firstnames.flat(Infinity)

// console.log(flatArray)

const arr = [2, 6, 9]
arr.push(12)

arr[1] = 34

// On ne peut pas écraser une constante
// person_2 = { name: "Wam" }

// const person_1 = {
//     name: "DOAZAN",
//     firstname: "Paul"
// }

// const person_2 = {
//     name: "DUPONT",
//     firstname: "Bastien"
// }


// Aparté sur les CLASSES

class Person {
    constructor(nameParam, firstnameParam) {
        this.name = nameParam
        this.firstname = firstnameParam
    }
    getName() {
        console.log(`hello, my name is ${this.firstname} ${this.name}`)
    }
}

const person_1 = new Person("DOAZAN", "Paul")
const person_2 = new Person("DUPONT", "Bastien")

console.log(person_2.getName())



// Assignation par référence
// const person_2 = person_1
// person_2.firstname = "Pierre"

// console.log(person_1)