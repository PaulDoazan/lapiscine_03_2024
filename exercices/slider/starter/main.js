const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];

// On implémente d'abord les éléments interactifs avec seulement une variable modifiée
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");
const imgs = document.querySelectorAll(".slider-img");
const btns = [btnLeft, btnRight];
const dots = document.querySelectorAll(".dot");

let slideIndex = 0

btns.forEach(btn => {
    btn.addEventListener('click', onBtnClick)
})

dots.forEach(dot => {
    dot.addEventListener('click', onDotClick)
})

function onBtnClick(e) {
    const elements = e.currentTarget.className.split('-')
    if (elements[elements.length - 1] === "left") {
        slideIndex--
    } else {
        slideIndex++
    }

    if (slideIndex < 0) slideIndex = 0
    if (slideIndex > slidesData.length - 1) slideIndex = slidesData.length - 1

    console.log(slideIndex)
    updateUI(slideIndex)
}

function onDotClick(e) {
    const firstClass = e.currentTarget.className.split(' ')[0]
    slideIndex = firstClass[firstClass.length - 1]

    updateUI(slideIndex)
}

function updateUI(ind) {
    btnLeft.style.opacity = ind === 0 ? 0.5 : 1
    btnRight.style.opacity = ind === slidesData.length - 1 ? 0.5 : 1

    dots.forEach(dot => {
        const firstClass = dot.className.split(' ')[0]
        const myIndex = firstClass[firstClass.length - 1]

        dot.style.opacity = ind == myIndex ? 1 : 0.5
    })

    imgs.forEach((img, index) => {
        img.style.opacity = ind == index ? 1 : 0
    })
}

updateUI(slideIndex)