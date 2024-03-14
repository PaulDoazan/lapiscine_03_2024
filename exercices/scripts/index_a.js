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

console.log(result)

// Afficher le nom et les ingrédients de la pizza la plus chère
const mostExpPizza = getMostExpensivePizza(pizzas)
console.log(mostExpPizza.name)

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

const ultimatePizza = getUltimatePizza(pizzas, pizzas_2)
console.log(ultimatePizza.name)

function getUltimatePizza(arr1, arr2) {

}