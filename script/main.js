const API_KEY = "64389c256a6d20179644053a";
const BASE_URL = "https://dummyapi.io/data/v1/";

document.querySelectorAll('.movie-card').forEach((i) =>
    i.addEventListener('click', () => {
        window.location.replace('./film.html')
    })
)
document.querySelectorAll(`.login`).forEach((i)=>{
    i.addEventListener(`click`, ()=> {
        location.replace(`./authorization.html`)
    })
})

document.querySelectorAll(`#toRegistrationPage`).forEach((i)=>{
    i.addEventListener(`click`, ()=>{
        location.replace(`./registration.html`)
    })
})

async function makeQuery(endpoint, method = `GET`, payload = ``) {
    let options = {
        method,
        headers: {
            "app-id": API_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        ...(method.toLowerCase() !== "get" && { body: JSON.stringify(payload) }),
    };
    const response = await fetch(BASE_URL + endpoint, options);
    return await response.json();
}
async function usersDataBase() {
    let {data} = await makeQuery(`user?created=1`)
    console.log(data);
    return data
}
let usersOfCinemania = usersDataBase()