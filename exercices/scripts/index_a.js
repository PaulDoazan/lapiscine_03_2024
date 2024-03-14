import pizzas from "../data/pizzas.json" assert {type: "json"}

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
let maxPizza = pizzas[0]

// En paramètre, un tableau de pizzas
function getMostExpensivePizza() {

}

for (let i = 1; i < pizzas.length; i++) {
    if (pizzas[i].price > maxPizza.price) {
        maxPizza = pizzas[i]
    }
}

console.log(`La ${maxPizza.name} a pour ingrédients ${maxPizza.ingredients} et coûte ${maxPizza.price}`)