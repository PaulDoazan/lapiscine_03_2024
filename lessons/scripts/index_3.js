// conditions imbriquées

// if () {
//     if () {
//     }
// }

// array.length, index

// let obj = {}
let arr = ["Dan", "Sami", "Karim", "Claude"]
let result = ""

// écrire la chaîne de caractère "Dan, Sami et Karim assistent au cours de Javascript."

for (let index = 0; index < arr.length; index++) {
    if (index === arr.length - 1) {
        result += arr[index] + " "
    } else if (index === arr.length - 2) {
        result += arr[index] + " et "
    } else {
        result += arr[index] + ", "
    }
}

result += "assistent au cours de Javascript."

// console.log(result)

let numbers = [3, 1, 21, 13, 15, 8, 7]
let total = 0

// A l'aide d'un parcours de tableau, calculer la somme totale du tableau

for (let ind = 0; ind < numbers.length; ind++) {
    total += numbers[ind]
}

// console.log(total)

// A l'aide d'un parcours de tableau, calculer la somme de la première moitié du tableau, et la somme de la seconde moitié du tableau

let total_1 = 0
let total_2 = 0

for (let i = 0; i < numbers.length; i++) {
    if (i < numbers.length / 2) {
        total_1 += numbers[i]
    } else {
        total_2 += numbers[i]
    }
}

// console.log(total_1, total_2)


let people = [
    {
        name: "Jean",
        age: 28,
        hasCar: false
    },
    {
        name: "Daniel",
        age: 17,
        hasCar: false
    },
    {
        name: "Mathilde",
        age: 21,
        hasCar: true
    },
    {
        name: "Oscar",
        age: 12,
        hasCar: false
    },
    {
        name: "Adèle",
        age: 43,
        hasCar: true
    },
    {
        name: "Romane",
        age: 61,
        hasCar: false
    },
    {
        name: "Amandine",
        age: 8,
        hasCar: false
    },
    {
        name: "Johanna",
        age: 25,
        hasCar: true
    },
]