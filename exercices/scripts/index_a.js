import pizzas from "../data/pizzas.json" assert {type: "json"}
import pizzas_2 from "../data/pizzas_2.json" assert {type: "json"}

// Afficher dans la console une chaîne de caractère de tous les ingrédients de la dernière pizza : "mozzarella, tomate..."
let result = ""
const ingredientsArray = pizzas[pizzas.length - 1].ingredients

for (let i = 0; i < ingredientsArray.length; i++) {
    if (i !== ingredientsArray.length - 1) {
        result += ingredientsArray[i] + ", "
    } else {
        result += ingredientsArray[i] + " !"
    }
}

// console.log(result)

// Afficher le nom et les ingrédients de la pizza la plus chère
const mostExpPizza = getMostExpensivePizza(pizzas)
// console.log(mostExpPizza.name)

// En paramètre, un tableau de pizzas, on retourne la pizza la plus chère
function getMostExpensivePizza(arrPizzas) {
    let maxPizza = arrPizzas[0]

    for (let i = 1; i < arrPizzas.length; i++) {
        if (arrPizzas[i].price > maxPizza.price) {
            maxPizza = arrPizzas[i]
        }
    }

    return maxPizza
}

// console.log(`La ${maxPizza.name} a pour ingrédients ${maxPizza.ingredients} et coûte ${maxPizza.price}`)

// Ecrire une fonction qui cherche la pizza la plus chère parmi 2 tableaux passés en paramètre
// Array.push() => la méthode qui permet d'ajouter un élément à la fin d'un tableau
const ultimate = getUltimatePizza(pizzas, pizzas_2)
console.log(ultimate.name)

function getUltimatePizza(arr1, arr2) {
    let totalArray = []
    for (let i = 0; i < arr1.length; i++) {
        totalArray.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        totalArray.push(arr2[i])
    }

    return getMostExpensivePizza(totalArray)
}


// Ecrire une fonction qui prend en paramète un tableau de pizzas, et qui me retourne le prix moyen de toutes les pizzas
const resultAvg = getAveragePrice(pizzas)
// console.log(resultAvg)

function getAveragePrice(arr) {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i].price
    }

    const average = total / arr.length

    // Méthode alternative pour tronquer un nombre après la virgule
    return average.toFixed(2)
}
// Ecrire une fonction qui prend 2 paramètres : un tableau de pizza et un nom de pizza. Cette fonction retourne un tableau des ingrédients de cette pizza
const resultIngredients = getIngredientsByName(pizzas, "Regina")
// console.log(resultIngredients)

function getIngredientsByName(arr, nameParam) {
    let ingredientsArr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === nameParam) {
            ingredientsArr = arr[i].ingredients
            // Une fois l'element trouve, il est inutile de continuer a executer la boucle
            break
        }
    }
    return ingredientsArr
}

// Ecrire une fonction qui prend en parametre un tableau de pizzas, et qui retourne un tableau des noms de pizzas qui sont a base de tomate
const resultNames = getPizzasName(pizzas)
// console.log(resultNames)



// Amélioration, la fonction prend en 2ème paramètre un tableau de noms de pizzas, et retourne un tableau des ingrédients COMMUNS à ces pizzas



function getPizzasNameWithTomato(arr) {
    let pizzaNames = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].baseTomate) pizzaNames.push(arr[i].name)
    }
    return pizzaNames
}

function getPizzasName(arr) {
    let pizzaNames = []

    for (let i = 0; i < arr.length; i++) {
        pizzaNames.push(arr[i].name)
    }

    return pizzaNames
}

// NOUVELLE SYNTAXE DES FONCTIONS : LES FONCTIONS FLECHEES, ARROW FUNCTIONS
const container = document.querySelector('.container')

// fonction anonyme
const myFunction = (e) => {
    console.log(e.currentTarget)
}

container.addEventListener('click', () => { })

const names = pizzas.map((element) => {
    let result
    if (element.baseTomate) {
        result = "Pizza a la tomate : " + element.name
    } else {
        result = "Pizza a la creme fraiche : " + element.name
    }

    return result
})

// console.log(pizzas.map(el => el.name))
console.log(pizzas.map(el => el.baseTomate ? "Pizza a la tomate : " + el.name : "Pizza a la creme fraiche : " + el.name))
// console.log(names)

const numbers = [2, 5, 34, 32, 12]

// a l'aide d'un .map, afficher un tableau qui contient tous les doubles de numbers
const doubles = numbers.map((number) => {
    return number * 2
})

// les elements qui ne remplissent pas la condition donne quand meme un undefined
const smallNumbers = numbers.map((number) => {
    if (number < 10) return number
})

// const filteredNumbers = numbers.filter((element) => {
//     return element < 10
// })

const filteredNumbers = numbers.filter(element => element < 10)
console.log(filteredNumbers)

// a l'aide d'un filter, refaire l'exercice pour filtrer les pizzas avec tomate





