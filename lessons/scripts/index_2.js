let person1 = {
    name: 'Max',
    vehicle: 'car',
    town: 'Paris'
}

let person2 = {
    name: 'Nathalie',
    vehicle: 'bike',
    town: 'Bordeaux'
}

let person3 = {
    name: 'Cathy',
    vehicle: 'car',
    town: 'Lyon'
}

// écrire la condition pour afficher "{Un tel} a une voiture"
let personToTest = person3

// if (personToTest.vehicle === "car") {
//     console.log(`${personToTest.name} a une voiture`)
// } else {
//     console.log(`${personToTest.name} n'a pas de voiture`)
// }

// écrire un test pour savoir d'abord si la personne doit se rendre à Paris, et ensuite si la personne peut
// {Un tel} n'a pas besoin d'aller à Paris.
// {Un tel} ne peut pas se rendre en voiture à Paris.

// if (personToTest.town === "Paris") {
//     console.log(`${personToTest.name} n'a pas besoin d'aller à Paris.`)
// } else {
//     if (personToTest.vehicle === "car") {
//         console.log(`${personToTest.name} peut se rendre en voiture à Paris.`)
//     } else {
//         console.log(`${personToTest.name} ne peut pas se rendre en voiture à Paris.`)
//     }
// }

// if (personToTest.town !== "Paris") {
//     console.log(`${personToTest.name} n'habite pas à Paris.`)
// }

// LES TABLEAUX : array[]
const myArray = [2, 5, 7, 9]

const sumResult = myArray[0] + myArray[1] + myArray[2] + myArray[3]
// console.log(sumResult)

const arr = [
    {
        brand: "Citroën",
        model: "Berlingo",
        year: 2014,
        electric: false
    },
    {
        brand: "Renault",
        model: "Kangoo",
        year: 2018,
        electric: true
    }
]

let isElectricSentence = "est électrique"

// tester la propriété electric
// const index = 0
// if (arr[index].electric === false) {
//     isElectricSentence = "n'est pas électrique"
// }

//console.log(isElectricSentence)
// console.log(`Le modèle ${arr[index].model} ${arr[index].year} de la marque ${arr[index].brand} ${isElectricSentence}.`)


// LES BOUCLES

// console.log('before for loop')

// for (let index = 1; index < 50; index++) {
//     if (index % 3 === 0) {
//         console.log('multiple de 3 : ' + index)
//     }
// }

// console.log('After for loop')
// let sum = 0

// for (let index = 0; index < 20; index++) {
//     sum += index
//     // console.log(`indice courant : ${index}, sum courante : ${sum}`)
// }

// let sum = 0

// // Calculer la somme de tous les nombres impairs jusqu'à 20
// for (let index = 0; index < 20; index++) {
//     if (index % 2 === 1) {
//         sum += index
//     }
// }

// console.log(sum)

let firstnames = ["Paul", "Pierre", "Mathilde", "Simon", "Paul", "Pierre", "Mathilde", "Simon", "Paul", "Pierre", "Mathilde", "Simon", "Paul", "Pierre", "Mathilde", "Simon", "Paul", "Pierre", "Mathilde", "Simon"]

// console.log(firstnames.length)

// for (let index = 0; index < firstnames.length; index++) {
//     console.log(firstnames[index])
// }

// Calculer et afficher la somme des nombres supérieurs à 10
let numbers = [12, 4, 67, 32, 11, 3, 1, 14]

let result = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        result += numbers[i]
    }
}

console.log(result)


// Exercice plus difficile : calculer et afficher la somme des nombres supérieurs à la moyenne
// Une première boucle for pour calculer la moyenne, puis une seconde boucle for pour faire la comparaison avec cette moyenne

// MOYENNE = TOTAL / nbElements

let total = 0

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}

let average = total / numbers.length

total = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
        total += numbers[i]
    }
}

console.log(total)






