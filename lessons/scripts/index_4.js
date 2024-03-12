// REVISIONS ET PRECISIONS

let result = "..."
let hello = "Hello World"
result = maPetiteFonctionDuMatin("marmelade")
result += " !"

for (let i = 0; i < 10; i++) {
    result += " ! "
}

// console.log(result, hello)

function maPetiteFonctionDuMatin(param) {
    hello += " !!!"
    return `Tartine à la ${param}`
}

let number = 5
let myName

if (number < 10) {
    myName = "Paul"
} else {
    myName = "Pierre"
}

// console.log(myName)

let arrNumbers_1 = [2, 7, 3, 1, 4]
let arrNumbers_2 = [12, 17, 13, 11, 14, 31, 6, 28]

// écrire la fonction qui retourne le minimum d'un tableau passé en paramètre

const min_1 = getMinimum(arrNumbers_1)
const min_2 = getMinimum(arrNumbers_2)

// console.log(min_1, min_2)

function getMinimum(arr) {
    let minimum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i]
        }
    }
    return minimum
}


// RETOUR A L'IMC
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