

function searchChange(event) {
    console.log(event.target.value)
}


async function renderMovies() {
    const shows = await fetch(`https://www.omdbapi.com/?apikey=23ac2af0&s=jurassic`);
    const showsData = await shows.json();
    const movieListEl = document.querySelector(`.movie-list`);

    movieListEl.innerHTML = showsData.Search
    .map(show =>` 
        <div class="show-card" onclick="${show.id}">
            <div class="show-card__container">
              <h3><b>Title:<b> ${show.title}</h3>
                <p><b>Year:</b> ${show.year}</p>
                <img href="${show.poster}"
            </div>
          </div>
          `)
        .join("");
        console.log(showsData)
}

renderMovies();

