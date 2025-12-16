async function main() {
    const shows = await fetch(`https://api.jikan.moe/v4/seasons/2023/spring?sfw`);
    const showsData = await shows.json();
    const animeListEl = document.querySelector(`.anime-list`);
console.log(showsData)
    animeListEl.innerHTML = showsData.data
    .map(show =>` 
        <div class="show-card">
            <div class="show-card__container">
              <h3><b>Title:<b>${show.title}</h3>
              <h4><b>English Title:<b>${show.title_english}<h4>
                <p><b>Year:</b>${show.year}</p>
                <p><b>Rating:</b>${show.rating}</p>
                <p><b>Synopsis:</b>${show.synopsis}</p>
            </div>
          </div>
          `)
        .join("");
}

main();