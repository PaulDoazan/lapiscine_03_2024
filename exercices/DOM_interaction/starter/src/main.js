// EXO 1
const btns_1 = document.querySelectorAll('.btn-1')
const divToColor_1 = document.querySelector('.div-to-color-1')

btns_1.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target, e.currentTarget)
        divToColor_1.style.backgroundColor = e.currentTarget.textContent
    })
})


// EXO 2
const textToDisplay3 = document.querySelector('.text-to-display-3')
const input3 = document.querySelector('.input-3')
// type d'event => "input"

input3.addEventListener('input', (e) => {
    // e.target est la balise sur laquelle l'utilisateur a déclenché l'event (sur laquelle il a cliqué par ex)
    // e.currentTarget est la balise sur laquelle a été déclaré le .addEventListener()
    // Dans la plupart des cas, c'est la même balise. Mais si une balise contient une balise enfant, e.target sera l'enfant et e.currentTarget le parent. 
    console.log(e.target, e.currentTarget)
    if (!e.target.value) {
        textToDisplay3.textContent = "no text"
        return
    }
    textToDisplay3.textContent = e.target.value
})