// Selectionner les div square et changer la couleur d'une case sur deux en blanc
// const squares = document.querySelectorAll('.square')

// for (let i = 0; i < squares.length; i++) {
//     if (i % 2 === 0) {
//         squares[i].style.backgroundColor = "white"
//     } else {
//         squares[i].style.backgroundColor = "black"
//     }
// }

// CREATION D'ELEMENT DU DOM
const row = document.querySelector('.row')

// Consigne : créer 5 éléments noir ou blanc insérés dans la div row
const square = document.createElement('div')
square.style.width = "80px"
square.style.height = "80px"
square.style.backgroundColor = "white"
row.appendChild(square)