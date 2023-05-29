let id = localStorage.getItem(`currentFilm`)
const API_KEY_KINOPOISK = `2GCKBBZ-2K14VNW-H6Y5F35-6P5KTEY`
const LINK = `https://api.kinopoisk.dev/v1.3/movie/`
async function loadInfo(endpoitn) {
    let options = {
        method: 'get',
        headers: {
            'accept': 'application/json',
            'X-API-KEY': API_KEY_KINOPOISK,
        },
    };

    let response = await fetch(LINK + endpoitn, options);
    let { docs } = await response.json();
    console.log(docs);
    return docs;
}
loadInfo(id)