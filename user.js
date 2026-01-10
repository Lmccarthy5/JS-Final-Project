const searchName = document.querySelector(`.searchName`)


function searchChange(event) {
    renderMovies(event.target.value)
    searchName.innerHTML = event.target.value
}

let currentMovies = []

async function renderMovies(searchTerm) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=23ac2af0&s=${searchTerm}`)
    const data = await response.json();
    currentMovies = data.Search
    displayMovies(currentMovies)
}

function displayMovies(movieList) {
    const moviesWrapper = document.querySelector(`.show-card__container`)
    moviesWrapper.innerHTML = movieList
    .map((movies) => {
        return `
        <div class="movie">
        <img src=${movies.Poster} alt="" class="posters">
        <h2>${movies.Title}</h2>
        <h4>${movies.Year}</h4>
        <button>Learn More</button>
        </div>`
    }).join("");

}

function sortChange(event) {
    const sortOption = event.target.value;

    let sortedMovies = [...currentMovies];

    if (sortOption === "newest") {
        sortedMovies.sort((a, b) => b.year - a.year);
    } else if (sortOption === "oldest") {
        sortedMovies.sort((a, b) => a.year - b.year);
    }

    displayMovies(sortedMovies);
}

function loading(event) {
    event.preventDefault();
    const waiting = document.querySelector(`.loading`)
    waiting.classList += " loading--visible"

    .then(() => {
        waiting.classList.remove("loading--visible")
    })
}


 

