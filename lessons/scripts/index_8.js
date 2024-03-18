// Nouvelle façon d'écrire les fonctions :
const add = (param1, param2) => {
    // console.log("arrow function")
    return param1 + param2
}

const result = add(4, 8)
// console.log(result)

function addParameters(param1, param2) {
    console.log("standard function")
    return param1 + param2
}

const numbers = [2, 5, 8, 91, 21, 34]
// filtrer le tableau pour récupérer un tableau des nombres impairs

const filteredNumbers = numbers.filter((element, idx, arr) => element % 2 === 1)
console.log(filteredNumbers)

// A l'aide de la méthode .map(), retourner un tableau dont les valeurs inférieures à 30 sont multipliées par 2

const biggerNumbers = numbers.map((element) => {
    // condition ternaire ? _ : _
    return element < 30 ? element * 2 : element
    // if (element < 30) {
    //     return element * 2
    // } else {
    //     return element
    // }
})

// console.log(biggerNumbers)

// A l'aide de .map(), retourner un tableau dont 1 élément sur 2 sera multiplié par 10
const numbersByTen = numbers.map((num, index) => {
    return index % 2 === 0 ? num * 100 : num
    // if (index % 2 === 0) {
    //     return num * 10
    // } else {
    //     return num
    // }
})

// A l'aide de .map(), retourner un tableau dont tous les éléments sont multipliés par 10, sauf le dernier


// C'est l'ordre des paramètres qui définit leur valeur dans le corps de la fonction
const numbersByTenExceptLast = numbers.map((num, index, arr) => {
    if (index === arr.length - 1) {
        return num
    } else {
        return num * 10
    }
})

console.log(numbersByTenExceptLast)