document.querySelectorAll('.movie-card').forEach((i) =>
    i.addEventListener('click', () => {
        window.location.replace('./film.html')
    })
)