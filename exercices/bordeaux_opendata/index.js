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