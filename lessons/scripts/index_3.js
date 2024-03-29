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

// Calculer la moyenne des âges de people (le total divisé par le nombre d'éléments)
let totalAgePeople = 0

for (let i = 0; i < people.length; i++) {
    totalAgePeople += people[i].age
}

// Difficulté supplémentaire, afficher la moyenne avec 1 chiffre après la virgule, en utilisant la méthode Math.round()

let ageAverage = totalAgePeople / people.length
ageAverage = Math.round(ageAverage * 10) / 10

// console.log(ageAverage)

// Afficher le nombre de personnes qui ont une voiture
let nbPeopleWithCar = 0

for (let i = 0; i < people.length; i++) {
    if (people[i].hasCar) nbPeopleWithCar++
}

// console.log(nbPeopleWithCar)

// Difficulté supplémentaire : afficher une phrase "Un tel, un tel, un tel et un tel ont une voiture."

let peopleWithCar = []

for (let i = 0; i < people.length; i++) {
    if (people[i].hasCar) {
        peopleWithCar.push(people[i])
    }
}

// console.log(peopleWithCar);


// LES FONCTIONS

// déclaration d'une fonction
function logName(parameter) {
    console.log("Bonjour " + parameter + " Vous avez gagné notre grand prix, appelez au 0033...")
}

// exécution d'une fonction
// logName("Paul")
// logName("Pierre")
// logName("Simon")

function add(param1, param2) {
    console.log(param1 + param2)
}

// add(3, 4)
// add(200, 41)
// add(21, 7)

function addWithReturn(p1, p2) {
    return (p1 + p2)
}

let resultAddition = addWithReturn(5, 6)

let names_1 = ["Paul", "Pierre", "Simon"]
let names_2 = ["Mathilde", "Adèle", "Romane"]
let names_3 = ["Dan", "Sami", "Karim"]

function getAllNamesInSentence(arrParameter) {
    let sentence = ""

    for (let i = 0; i < arrParameter.length; i++) {
        sentence += arrParameter[i]
        if (i !== arrParameter.length - 1) {
            sentence += ", "
        }
    }

    return sentence
}

let resultSentence = getAllNamesInSentence(names_1)
let resultSentence2 = getAllNamesInSentence(names_2)
let resultSentence3 = getAllNamesInSentence(names_3)

// console.log(resultSentence);
// console.log(resultSentence2);
// console.log(resultSentence3);

// console.log(resultSentence);


let towns = ['Bordeaux', 'Talence', 'Pessac', 'Mérignac']

// Ecrire une fonction qui prend en paramètre un tableau et qui retourne la phrase 'Bordeaux - Talence - Pessac - Mérignac'

const townsSentence = getTownsSentence(towns)
// console.log(townsSentence)

function getTownsSentence(tab) {
    let sentence = ""

    for (let i = 0; i < tab.length; i++) {
        sentence += tab[i]
        if (i !== tab.length - 1) {
            sentence += " - "
        }
    }

    return sentence
}


let resultFromArrayOfObject = getNamesInSentence(people)
// console.log(resultFromArrayOfObject)

// 'Jean - Mathilde - Adèle ...'
function getNamesInSentence(arr) {
    let result = ""

    for (let i = 0; i < arr.length; i++) {
        result += arr[i].name
        if (i !== arr.length - 1) result += " - "
    }

    return result
}

// Exercice++
// La fonction retourne un tableau des noms des personnes qui n'ont pas de voiture


// Précision sur les paramètres
let myArrayOfObjects = [
    { name: 'Sara', gender: 'f' },
    { name: 'Alice', gender: 'f' },
    { name: 'Antoine', gender: 'm' },
    { name: 'Stéphane', gender: 'm' },
]

// let objectToTest = myArrayOfObjects[3]
// let gone = "parti"

// if (objectToTest.gender === "f") {
//     gone += 'e'
// }

// console.log(`${objectToTest.name} est ${gone} !`)

// Ecrire une fonction qui affiche en console la phrase correcte pour chaque élément du tableau

for (let i = 0; i < myArrayOfObjects.length; i++) {
    // logCorrectSentence(myArrayOfObjects[i])
}

function logCorrectSentence(element) {
    let gone = "parti"

    if (element.gender === "f") {
        gone += 'e'
    }

    console.log(`${element.name} est ${gone} !`)
}


// Exercice, trouver le minimum
let numbers_a = [34, 12, 31, 5, 54, 6]
let numbers_b = [32, 2, 45, 23, 21, 1]

let minimum_a = numbers_a[0]

for (let i = 1; i < numbers_a.length; i++) {
    if (numbers_a[i] < minimum_a) {
        minimum_a = numbers_a[i]
    }
}

// console.log(minimum_a)

let minimum_b = numbers_b[0]

for (let i = 1; i < numbers_b.length; i++) {
    if (numbers_b[i] < minimum_b) {
        minimum_b = numbers_b[i]
    }
}

// console.log(minimum_b)
// Exercice++
// Avec le tableau people[], afficher le nom de la personne la plus jeune


// Exercice, factoriser le script avec une fonction getMinimum() qui retourne la valeur minimum d'un tableau

// let numbers_a = [34, 12, 31, 5, 54, 6]
let min_a = getMinimum(numbers_a)
let min_b = getMinimum(numbers_b)

// console.log(min_a, min_b)

function getMinimum(arrNumbers) {
    let resultMinimum = arrNumbers[0]

    for (let i = 1; i < arrNumbers.length; i++) {
        if (arrNumbers[i] < resultMinimum) {
            resultMinimum = arrNumbers[i]
        }
    }

    return resultMinimum
}

// écrire la fonction getAverage()
const avg_a = getAverage(numbers_a)
const avg_b = getAverage(numbers_b)

// console.log('Mes moyennes : ' + avg_a + ', ' + avg_b)

function getAverage(arr) {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    const avg = Math.round(total * 100 / arr.length) / 100

    return avg
}


// CALCUL DE L'IMC

const person_1 = {
    name: "Jean",
    size: 1.78,
    weigth: 75
}

const person_2 = {
    name: "Marc",
    size: 1.92,
    weigth: 86
}

const person_3 = {
    name: "Sophie",
    size: 1.70,
    weigth: 67
}

const person_4 = {
    name: "Julie",
    size: 1.65,
    weigth: 67
}

// formule de l'IMC : poids / (taille * taille)

// Ecrire la fonction qui retourne l'IMC d'une personne.
// Afficher en console "Un tel a une IMC de ..."

logIMC(person_1)
logIMC(person_2)
logIMC(person_3)
logIMC(person_4)

function getIMC(param) {
    let imc = Math.round(param.weigth * 100 / (param.size * param.size)) / 100
    return imc
}

function logIMC(person) {
    let imc = getIMC(person)
    console.log(`${person.name} a un IMC de ${imc}`)
}

// Exercice++
// const people_2 = [person_1, person_2, person_3]
// Modifier la fonction pour prendre en paramètre le tableau d'objets ci-dessus
// La fonction affichera "Un tel a l'IMC la plus élevée"