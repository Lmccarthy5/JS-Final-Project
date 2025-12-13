async function main() {
    const shows = await fetch(`https://api.jikan.moe/v4/seasons/2023/spring?sfw`);
    const showsData = await shows.json();
    const animeListEl = document.querySelector(`.anime_list`)
    console.log(showsData)
    console.log(
    showsData.Search.map(data =>
    ` <div class="show-card">
            <div class="show-card__container">
              <h3>Title</h4>
                <p><b>Year</b></p>
                <p><b>Rated</b></p>
                <p><b>Released</b></p>
            </div>
          </div>`
        )
        .join("")
    );
}

main();