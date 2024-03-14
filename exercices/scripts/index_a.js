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