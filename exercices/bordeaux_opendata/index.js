// Implémenter un bouton Actualiser pour consommer l'API bordeaux opendata

// création de div
const mainInterface = document.querySelector('.main-interface')
const poolsContainer = document.querySelector('.pools-container')
const button = document.querySelector('button')

button.addEventListener("click", onBtnClick)

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
    // on rafraîchit le poolsContainer
    poolsContainer.innerHTML = ""
    pools.forEach(pool => {
        console.log(pool)
        const div = document.createElement('div')
        //<div class="place" data-index="0">
        div.classList.add("place")
        div.innerHTML = `
        <div class="place-name">nom de la piscine</div>
        <div class="place-infos">... / ...</div>
        <div class="diagram-container">
          <div class="capacity"></div>
          <div class="visitors"></div>
        </div>
        `
        poolsContainer.appendChild(div)
    });

    console.log(pools)
}