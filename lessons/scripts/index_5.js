// Récupérer les éléments du dom : number, btn, result, et les rafraîchir =>  0, ...
const numberDivs = document.querySelectorAll('.number')
const btnDivs = document.querySelectorAll('.btn')
const resultDiv = document.querySelector('.result')

let correctResult = 0

for (let i = 0; i < numberDivs.length; i++) {
    const random = Math.round(Math.random() * 20)
    numberDivs[i].textContent = random

    // Calcul du résultat
    correctResult += random
}

// On remplace la valeur des btns par la valeur correcte à laquelle on ajoute/soustrait une marge d'erreur
// 1. On définit de façon aléatoire la marge d'erreur entre 1 et 5
// 2. On soustrait/ajoute cette marge d'erreur à correctResult et on l'affecte au textContent de chaque bouton

let randomMargin = getRandomBetweenNumbers(1, 5)

for (let i = 0; i < btnDivs.length; i++) {
    btnDivs[i].textContent = Math.round(Math.random() * 20)
}

let randomPosition = Math.round(Math.random() * (btnDivs.length - 1))
btnDivs[randomPosition].textContent = correctResult

resultDiv.textContent = "..."


function getRandomBetweenNumbers(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}