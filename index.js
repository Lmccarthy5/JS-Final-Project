//fetch(`https://api.jikan.moe/v4/seasons/2023/spring?sfw`)

const indexInput = document.getElementById(".index__input")
indexInput.addEventListener('keyup' , e => {
    let currentValue = e.target.value;
    console.log(currentValue)
})