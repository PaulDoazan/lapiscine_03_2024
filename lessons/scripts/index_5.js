// Récupérer les éléments du dom : number, btn, result, et les rafraîchir =>  0, ...
const numberDivs = document.querySelectorAll('.number')
const btnDivs = document.querySelectorAll('.btn')
const resultDiv = document.querySelector('.result')

let randomNumbers = []
let correctResult = 0

for (let i = 0; i < numberDivs.length; i++) {
    const random = Math.round(Math.random() * 20)
    // La méthode .push() d'un tableau permet d'ajouter un élément à la fin du tableau
    randomNumbers.push(random)
    numberDivs[i].textContent = random

    // Calcul du résultat
    correctResult += random
}

for (let i = 0; i < btnDivs.length; i++) {
    btnDivs[i].textContent = Math.round(Math.random() * 20)
}

let randomPosition = Math.round(Math.random() * (btnDivs.length - 1))
btnDivs[randomPosition].textContent = correctResult

resultDiv.textContent = "..."