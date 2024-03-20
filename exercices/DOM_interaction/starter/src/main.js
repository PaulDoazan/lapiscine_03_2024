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



// EXO 3 => difficile


// EXO 4
// on interagit directement avec le formulaire, pas le button
const textToDisplay2 = document.querySelector('.text-to-display-2')
const form2 = document.querySelector('.form-2')
const input2 = document.querySelector('.input-2')

form2.addEventListener('submit', (e) => {
    e.preventDefault()
    textToDisplay2.textContent = input2.value
})


// EXO 5
const textToDisplay5 = document.querySelector('.text-to-display-5')
const input5 = document.querySelector('.input-5')

input5.addEventListener('input', (e) => {
    textToDisplay5.textContent = e.currentTarget.value
})

// EXO 6
const textToDisplay6 = document.querySelector('.text-to-display-6')
const select6 = document.querySelector('.select-6')

select6.addEventListener('change', (e) => {
    textToDisplay6.textContent = e.currentTarget.value
})

// EXO 7
const textToDisplay7 = document.querySelector('.div-to-color-7')
const input7 = document.querySelector('.input-7')

input7.addEventListener('input', (e) => {
    textToDisplay7.style.backgroundColor = e.currentTarget.value
})