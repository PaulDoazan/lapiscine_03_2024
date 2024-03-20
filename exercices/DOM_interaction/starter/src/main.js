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
const textToDisplay = document.querySelector('.text-to-display-4')
const inputs_4 = document.querySelectorAll('.input-4')

inputs_4.forEach(inputDate => {
    inputDate.addEventListener('change', (e) => {
        let str1 = inputs_4[0].value
        let str2 = inputs_4[1].value
        // const words_0 = input4_0_Str.split('-')
        // const words_1 = input4_1_Str.split('-')

        // let diff = Number(words_1[2]) - Number(words_0[2])
        const d1 = new Date(str1)
        const d2 = new Date(str2)

        const diff = Math.abs((d2 - d1) / (1000 * 60 * 60 * 24))

        textToDisplay.textContent = `Trip last : ${diff} days`
    })
})


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

// EXO 8
const btns_8 = document.querySelectorAll('.btn-8')
const divToColor_8 = document.querySelector('.div-to-color-8')

btns_8.forEach(btn => {
    btn.addEventListener('click', (e) => {
        divToColor_8.style.backgroundColor = e.currentTarget.getAttribute("data-color")
    })
})

// EXO 9
const textToDisplay9 = document.querySelector('.text-to-display-9')
const checkboxes = document.querySelectorAll('.checkbox')

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        textToDisplay9.textContent = `${checkboxes[0].checked ? checkboxes[0].value : ''}${checkboxes[0].checked && checkboxes[1].checked ? ' - ' : ""}${checkboxes[1].checked ? checkboxes[1].value : ''}`
    })
})