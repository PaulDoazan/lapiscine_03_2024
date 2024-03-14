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
// const row = document.querySelector('.row')
const container = document.querySelector('.container')

// Consigne : créer 5 éléments noir ou blanc insérés dans la div row
const nbCol = 6
const nbRow = 5

const grid = []

for (let i = 0; i < nbRow; i++) {
    const row = document.createElement('div')
    row.className = "row"
    container.appendChild(row)

    const rowArray = []
    grid.push(rowArray)

    for (let j = 0; j < nbCol; j++) {
        let colors
        if (i % 2) {
            colors = ["white", "black"]
        } else {
            colors = ["black", "white"]
        }
        let color = colors[j % 2]

        const squareDiv = createSquare(color, row)
        rowArray.push(squareDiv)
    }
}

console.log(grid)
// -> col 4 et row 2
grid[2][4].style.backgroundColor = "yellow"

function createSquare(colorParam, parentNode) {
    const square = document.createElement('div')
    square.className = "squareSize"
    square.style.backgroundColor = colorParam
    parentNode.appendChild(square)

    return square
}
