let id = localStorage.getItem(`currentFilm`)
const watchFilm = document.querySelector(`#film-watch`)
const block = document.querySelector(`.front`)
watchFilm.addEventListener(`click`, () => {
    document.querySelector(`.app`).style.opacity = `0.01`
    
    block.style.display = `flex`
})

block.addEventListener(`click`, ()=>{
    document.querySelector(`.app`).style.opacity = `1`
    block.style.display = `none`
})