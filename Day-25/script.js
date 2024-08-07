const apiKey = '99cf60b0';  

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    if (query) {
        fetchMovieData(query);
    }
});

function fetchMovieData(query) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayMovieResults(data.Search);
        })
        .catch(error => console.error('Error fetching movie data:', error));
}

function displayMovieResults(movies) {
    const movieResults = document.getElementById('movieResults');
    movieResults.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <button onclick="fetchMovieDetails('${movie.imdbID}')">More Info</button>
        `;
        movieResults.appendChild(movieCard);
    });
}
