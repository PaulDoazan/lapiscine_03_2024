// Nouvelle façon d'écrire les fonctions :
const add = (param1, param2) => {
    console.log("arrow function")
    return param1 + param2
}

const result = add(4, 8)
console.log(result)

function addParameters(param1, param2) {
    console.log("standard function")
    return param1 + param2
}

const numbers = [2, 5, 8, 91, 21, 34]

// filtrer le tableau pour récupérer un tableau des nombres impairs
