// EXO 1
const btns_1 = document.querySelectorAll('.btn-1')
const divToColor_1 = document.querySelector('.div-to-color-1')

btns_1.forEach(btn => {
    btn.addEventListener('click', (e) => {
        divToColor_1.style.backgroundColor = e.currentTarget.textContent
    })
})

