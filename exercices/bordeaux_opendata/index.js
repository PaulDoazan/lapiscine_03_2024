// Implémenter un bouton Actualiser pour consommer l'API bordeaux opendata

// création de div
const mainInterface = document.querySelector('.main-interface')
const div = document.createElement('div')
div.innerHTML = `<div class="note">JS DOM</div>`
mainInterface.appendChild(div)

async function fetchData() {
    try {
        const response = await fetch("https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_frequentation_piscine_tr/records?limit=20");
        const data = await response.json();

        displayData(data.results)
    } catch (error) {
        console.log(error)
    }
}

function displayData(pools) {
    console.log(pools)
}