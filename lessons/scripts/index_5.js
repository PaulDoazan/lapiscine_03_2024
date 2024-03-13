// Récupérer les éléments du dom : number, btn, result, et les rafraîchir =>  0, ...
const numberDivs = document.querySelectorAll('.number')
const btnDivs = document.querySelectorAll('.btn')
const resultDiv = document.querySelector('.result')
const refreshDiv = document.querySelector('.refresh')

let correctResult = 0

for (let i = 0; i < btnDivs.length; i++) {
    btnDivs[i].addEventListener("click", onBtnClick)
}

// on déclare l'event listener sur le bouton refresh

refreshDiv.addEventListener('click', init)

init()

// Implémenter la fonction callback onBtnClick, avec le test du résultat correct, et l'affichage dans la balise result
function onBtnClick(e) {
    if (e.currentTarget.textContent == correctResult) {
        resultDiv.textContent = "BRAVO !"
        refreshDiv.style.display = "block"
    } else {
        resultDiv.textContent = "Essaie encore !"
        refreshDiv.style.display = "none"
    }
}

function getRandomBetweenNumbers(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}

function init() {
    correctResult = 0
    refreshDiv.style.display = "none"

    for (let i = 0; i < numberDivs.length; i++) {
        const random = Math.round(Math.random() * 10)
        numberDivs[i].textContent = random

        // Calcul du résultat
        correctResult += random
    }

    // On remplace la valeur des btns par la valeur correcte à laquelle on ajoute/soustrait une marge d'erreur
    // 1. On définit de façon aléatoire la marge d'erreur entre 1 et 5
    // 2. On soustrait/ajoute cette marge d'erreur à correctResult et on l'affecte au textContent de chaque bouton
    let randomMargin = getRandomBetweenNumbers(1, 2)

    // Ajouter un écouteur d'événement de type "click" et dans la fonction de callback, afficher en console la valeur du bouton
    for (let i = 0; i < btnDivs.length; i++) {
        if (Math.random() < 0.5) {
            btnDivs[i].textContent = correctResult + randomMargin
        } else {
            btnDivs[i].textContent = correctResult - randomMargin
        }

        // On recalcule une marge aléatoire
        randomMargin = getRandomBetweenNumbers(randomMargin + 1, randomMargin + 2)
    }

    let randomPosition = Math.round(Math.random() * (btnDivs.length - 1))
    btnDivs[randomPosition].textContent = correctResult

    resultDiv.textContent = "..."
}