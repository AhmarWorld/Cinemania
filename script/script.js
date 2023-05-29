const API_KEY_KINOPOISK = `2GCKBBZ-2K14VNW-H6Y5F35-6P5KTEY`
const LINK = `https://api.kinopoisk.dev/v1/`
let rowListTop = document.querySelector(`#row-list_top`)
let lifeList = document.querySelector(`#lifeList`)
let brillitantAnim = document.querySelector(`#brillitantAnim`)
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
    return docs;
}
loadInfo(`movie?page=1&limit=6`).then((data) => {
    for (let movie of data) {
        rowListTop.innerHTML += `
        <div class="movie-card" onclick="openMoviePage(${movie.id})">
        <img
            src="${movie.poster.url}"
            class="card-img"
            alt="./assets/3.webp"
        />
        <div class="card-name">${movie.name}</div>
        <div class="card-rating">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M11.762 18.136l.238-.173.238.173c2.85 2.069 4.274 3.103 5.224 2.817a2.002 2.002 0 001.02-.71c.599-.791.122-2.486-.83-5.874l.1-.081c2.942-2.392 4.414-3.588 4.233-4.727a1.997 1.997 0 00-.199-.605c-.53-1.024-2.424-1.115-6.213-1.297-1.435-3.683-2.152-5.525-3.37-5.649a2.001 2.001 0 00-.406 0c-1.218.124-1.935 1.966-3.37 5.649-3.789.182-5.683.273-6.213 1.297a2 2 0 00-.2.605c-.18 1.139 1.292 2.335 4.235 4.727l.099.08c-.952 3.39-1.429 5.084-.83 5.875.256.34.613.588 1.02.71.95.286 2.375-.748 5.224-2.817z"
                ></path>
            </svg>
            ${Math.round(movie.rating.kp*10)/10}
        </div>
    </div>

        `
    }
})
loadInfo(`movie?page=2&limit=6`).then((data) => {
    for (let movie of data) {
        lifeList.innerHTML += `
        <div class="movie-card" onclick="openMoviePage(${movie.id})">
        <img
            src="${movie.poster.url}"
            class="card-img"
            alt="./assets/3.webp"
        />
        <div class="card-name">${movie.name}</div>
        <div class="card-rating">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M11.762 18.136l.238-.173.238.173c2.85 2.069 4.274 3.103 5.224 2.817a2.002 2.002 0 001.02-.71c.599-.791.122-2.486-.83-5.874l.1-.081c2.942-2.392 4.414-3.588 4.233-4.727a1.997 1.997 0 00-.199-.605c-.53-1.024-2.424-1.115-6.213-1.297-1.435-3.683-2.152-5.525-3.37-5.649a2.001 2.001 0 00-.406 0c-1.218.124-1.935 1.966-3.37 5.649-3.789.182-5.683.273-6.213 1.297a2 2 0 00-.2.605c-.18 1.139 1.292 2.335 4.235 4.727l.099.08c-.952 3.39-1.429 5.084-.83 5.875.256.34.613.588 1.02.71.95.286 2.375-.748 5.224-2.817z"
                ></path>
            </svg>
            ${Math.round(movie.rating.kp*10)/10}
        </div>
    </div>

        `
    }
})
loadInfo(`movie?page=3&limit=6`).then((data) => {
    for (let movie of data) {
        brillitantAnim.innerHTML += `
        <div class="movie-card" onclick="openMoviePage(${movie.id})">
        <img
            src="${movie.poster.url}"
            class="card-img"
            alt="./assets/3.webp"
        />
        <div class="card-name">${movie.name}</div>
        <div class="card-rating">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M11.762 18.136l.238-.173.238.173c2.85 2.069 4.274 3.103 5.224 2.817a2.002 2.002 0 001.02-.71c.599-.791.122-2.486-.83-5.874l.1-.081c2.942-2.392 4.414-3.588 4.233-4.727a1.997 1.997 0 00-.199-.605c-.53-1.024-2.424-1.115-6.213-1.297-1.435-3.683-2.152-5.525-3.37-5.649a2.001 2.001 0 00-.406 0c-1.218.124-1.935 1.966-3.37 5.649-3.789.182-5.683.273-6.213 1.297a2 2 0 00-.2.605c-.18 1.139 1.292 2.335 4.235 4.727l.099.08c-.952 3.39-1.429 5.084-.83 5.875.256.34.613.588 1.02.71.95.286 2.375-.748 5.224-2.817z"
                ></path>
            </svg>
            ${Math.round(movie.rating.kp*10)/10}
        </div>
    </div>

        `
    }
})
function openMoviePage(id){
    localStorage.setItem(`currentFilm`, id)
    location.href = `film.html`
}