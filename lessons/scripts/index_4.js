// REVISIONS ET PRECISIONS

let result = "..."
let hello = "Hello World"
result = maPetiteFonctionDuMatin("marmelade")
result += " !"

for (let i = 0; i < 10; i++) {
    result += " ! "
}

console.log(result, hello)

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

console.log(myName)

let arrNumbers_1 = [2, 7, 3, 1, 4]
let arrNumbers_2 = [12, 17, 13, 11, 14, 31, 6, 28]

// écrire la fonction qui retourne le minimum d'un tableau passé en paramètre

