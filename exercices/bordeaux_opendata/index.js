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
        button.innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div>`
        button.classList.add('searching')
    } else {
        button.innerHTML = "Actualiser"
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

    // Implémenter le tri du tableau par odre décroissant d'entrées
    // pools.sort((a, b) => {
    //     return b.entree - a.entree
    // })

    // Implémenter le tri du tableau par odre décroissant de ratio d'occupation
    pools.sort((a, b) => {
        return b.entree / b.fmizonmax - a.entree / a.fmizonmax
    })

    pools.forEach(pool => {
        const div = document.createElement('div')
        //<div class="place" data-index="0">
        div.classList.add("place")
        div.innerHTML = `
            <div class="place-name">${pool.etablissement_etalib} (${pool.fmizonlib})</div>
            <div class="place-infos">${pool.entree} / ${pool.fmizonmax}</div>
            <div class="diagram-container">
                <div class="capacity"></div>
                <div class="visitors"></div>
            </div>
        `
        poolsContainer.appendChild(div)
    });

    const visitorDiagrams = document.querySelectorAll('.visitors')

    setTimeout(() => {
        visitorDiagrams.forEach((element, index) => {
            const ratio = pools[index].entree / pools[index].fmizonmax
            element.style.transform = `scaleX(${ratio})`
        })
    }, 10)
}