console.log("start day 7")

// const body = document.querySelector('body')
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

btn.addEventListener("mousedown", onContainerDown)

function onContainerDown(e) {
    const myDiv = document.createElement("div")
    myDiv.className = "circle"
    myDiv.textContent = "Hello world"
    container.appendChild(myDiv)
}