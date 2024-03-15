console.log("start day 7")

// const body = document.querySelector('body')
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const btnRefresh = document.querySelector('.btn-refresh')

btn.addEventListener("mousedown", onBtnAddDown)
btnRefresh.addEventListener("mousedown", onRefreshDown)

let divs = []

let randomColor = "red"

const delay = 300

function onBtnAddDown(e) {
    for (let j = 0; j < 45; j++) {
        const row = document.createElement("div")
        row.className = "alignementHorizontal"
        container.appendChild(row)

        const rowArray = []
        divs.push(rowArray)
        for (let i = 0; i < 70; i++) {
            setTimeout(function () {
                const myDiv = document.createElement("div")
                myDiv.className = "circle"
                myDiv.addEventListener('mouseover', onCircleOver)
                row.appendChild(myDiv)
                rowArray.push(myDiv)
            }, (delay * j) + (delay / 70) * i)
        }
    }


}

function onCircleOver(e) {
    // e.currentTarget.style.visibility = "hidden"
    // e.currentTarget.style.display = "none"
    // e.currentTarget.remove()

    // la propriété isTransparent n'existe pas à la première interaction, elle est undefined
    // if (e.currentTarget.isTransparent) {
    //     e.currentTarget.style.opacity = 1
    // } else {
    //     e.currentTarget.style.opacity = 0.3
    // }

    e.currentTarget.style.backgroundColor = randomColor

    // e.currentTarget.style.opacity = e.currentTarget.isTransparent ? 1 : 0.3
    // // Ici, on convertit !undefined => true, donc on créé à la volée la propriété isTransparent
    // e.currentTarget.isTransparent = !e.currentTarget.isTransparent
}

function onRefreshDown(e) {
    randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    btnRefresh.style.backgroundColor = randomColor
    // for (let i = 0; i < divs.length; i++) {
    //     divs[i].style.backgroundColor = "black"
    // }
    // divs = []
    // container.innerHTML = ""
}

// Ajouter le listener pour faire "disparaître" un cercle quand on clique dessus

// Ajouter le listener pour modifier la transparence du cercle 1 fois sur 2 : 30% / 100%

// Ajouter le btn Refresh qui "fait disparaître" tous les cercles d'un coup