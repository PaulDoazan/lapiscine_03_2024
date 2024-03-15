console.log("start day 7")

// const body = document.querySelector('body')
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

btn.addEventListener("mousedown", onContainerDown)

const divs = []

function onContainerDown(e) {
    const myDiv = document.createElement("div")
    myDiv.textContent = "Hello world"
    myDiv.className = "circle"
    myDiv.isOpaque = true
    myDiv.addEventListener('mouseover', onCircleOver)
    container.appendChild(myDiv)
}

function onCircleOver(e) {
    // e.currentTarget.style.visibility = "hidden"
    // e.currentTarget.style.display = "none"
    // e.currentTarget.remove()

    if (e.currentTarget.isOpaque) {
        e.currentTarget.style.opacity = 0.3
    } else {
        e.currentTarget.style.opacity = 1
    }

    e.currentTarget.isOpaque = !e.currentTarget.isOpaque
}

// Ajouter le listener pour faire "disparaître" un cercle quand on clique dessus

// Ajouter le listener pour modifier la transparence du cercle 1 fois sur 2 : 30% / 100%

// Ajouter le btn Refresh qui "fait disparaître" tous les cercles d'un coup
