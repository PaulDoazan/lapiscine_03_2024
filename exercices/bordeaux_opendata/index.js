// Implémenter un bouton Actualiser pour consommer l'API bordeaux opendata

// création de div
const mainInterface = document.querySelector('.main-interface')
const button = document.querySelector('button')

button.addEventListener("click", onBtnClick)

// const div = document.createElement('div')
// div.innerHTML = `<div class="note">HELLO WORLD</div>`
// mainInterface.appendChild(div)

function onBtnClick() {
    btnChange("search")
    fetchData()
}

function btnChange(btnState) {
    if (btnState === "search") {
        button.textContent = "..."
        button.classList.add('searching')
    } else {
        button.textContent = "Actualiser"
        button.classList.remove('searching')
    }

}

async function fetchData() {
    try {
        const response = await fetch("https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_frequentation_piscine_tr/records?limit=20");
        const data = await response.json();

        btnChange("refresh")
        displayData(data.results)
    } catch (error) {
        btnChange("refresh")
        console.log(error)
    }
}

function displayData(pools) {
    console.log(pools)
}