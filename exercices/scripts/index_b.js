// setTimeout(() => {
//     console.log("index_b.js")
// }, 3000)

import movies from '../data/movies.json' assert {type: "json"}
// console.log(movies)

// a. Logger le premier element du tableau movies
// console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movies
// console.log(movies[3].year)

// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length - 1].title)

// écrire les scripts dans des fonctions

// d. Logger le titre du film qui a la meilleure note
const bestMovie = getBestMovie(movies)
// console.log(bestMovie.title)

// difficulté supplémentaire : on peut utiliser la méthode de tableau .sort()

console.log(bestMovie.title);

function getBestMovie(arr) {
    // let best = arr[0]
    // arr.forEach((element) => {
    //     if (element.rate > best.rate) {
    //         best = element
    //     }
    // })
    // return best

    return arr.sort((a, b) => b.rate - a.rate)[0];

    //return arr[0]
}

// e. Logger le titre du film le plus ancien
const oldestMovie = getOldestMovie(movies)
console.log(oldestMovie.title)

// difficulté supplémentaire : on peut utiliser la méthode de tableau .sort()
function getOldestMovie(arr) {
    let oldest = arr[0]
    arr.forEach((element) => {
        if (element.year < oldest.year) {
            oldest = element
        }
    })
    return oldest
}

// f. Logger un tableau de tous les titres de film qui ont au moins 3 acteurs
// .reduce()
const moviesWithMoreThan2Actors = getAllMoviesWithMoreThan2Actors(movies)
console.log(moviesWithMoreThan2Actors)

function getAllMoviesWithMoreThan2Actors(arr) {
    const filteredArray = arr.filter(el => {
        return el.actors.length > 2
    })

    const mappedArray = filteredArray.map(el => el.title)

    return mappedArray
}

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
const resTitles = getTitles(movies)
console.log(resTitles);

function getTitles(arr) {
    return arr.map(el => el.title)
}

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee
let resultArr = getMoviesByYear(movies, 1994)
console.log(resultArr)

function getMoviesByYear(arr, yearParam) {
    const filteredArray = arr.filter(el => {
        return el.year === yearParam
    })

    const mappedArray = filteredArray.map(el => el.title)

    return mappedArray
}

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur
const resMoviesDirector = getMoviesByDirector(movies, "Christopher Nolan")
console.log(resMoviesDirector);

function getMoviesByDirector(arr, directorParam) {
    const filteredArray = arr.filter(el => {
        return el.director === directorParam
    })

    const mappedArray = filteredArray.map(el => el.actors)
    return mappedArray.flat()

    // const emptyArray = []

    // for (let i = 0; i < mappedArray.length; i++) {
    //     for (let j = 0; j < mappedArray[i].length; j++) {
    //         emptyArray.push(mappedArray[i][j])
    //     }
    // }

    // return emptyArray;
}

// -> retourne un nouveau tableau de tous les noms d'acteurs des films de ce realisateur




// écrire une fonction qui prend en paramètre le tableau movies et un titre de film, et qui me retourne l'objet movie qui correspond au titre

const movie = getMovieByTitle(movies, "Interstellar")
console.log(movie)

function getMovieByTitle(arr, titleParam) {
    // let movie = "not found"
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].title === titleParam) {
    //         movie = arr[i]
    //         break
    //     }
    // }

    // arr.forEach(el => {
    //     if (el.title === titleParam) {
    //         movie = el
    //     }
    // })

    const movies = arr.find(el => el.title === titleParam)
    return movies
}


// écrire une fonction qui prend en paramètre le tableau movies, le nom d'un acteur, et qui me retourne un tableau des films dans lesquels joue cet acteur

// const res = getMoviesByActor(movies, "John Travolta")
console.log(movies.filter(movie => movie.actors.includes('John Travolta')))

function getMoviesByActor(arr, actorName) {
    // const movies = []
    // une première boucle pour parcourir tous les films
    arr.forEach(movie => {
        // movie.actors.forEach(actor => {
        //     if (actor === actorName) {
        //         movies.push(movie)
        //     }
        // })
        if (movie.actors.includes(actorName)) movies.push(movie)
    })
    // une seconde boucle dans la première, pour parcourir tous les actors d'un film et voir si un des actors correspond au paramètre actorName

    // return movies
    return arr.filter(movie => movie.actors.includes(actorName))
}