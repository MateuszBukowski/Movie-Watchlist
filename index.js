// i= - ID
// t= - title
// s= search

const apiKey = "56ebccac"

let movieTitle = ""

const serchInput = document.getElementById("search-input")
const serchResult = document.getElementById("serch-result")

document.addEventListener('submit', function(e){
    e.preventDefault()
    searchMovie()
})

function searchMovie(){
    movieTitle = "s=" + serchInput.value //By Search = s
    console.log(movieTitle)
    searchOmdb(movieTitle, apiKey)
}

function searchOmdb (movieTitle, apiKey){
    fetch(`http://www.omdbapi.com/?${movieTitle}&apikey=${apiKey}`)
        .then(respond => respond.json())
        .then(data => {
            serchResult.innerHTML = getMovieResult(data.Search)
        })
}

function getMovieResult(data) {
    let htmlResult = ""
    for (let movie = 0; movie < data.length ; movie++)
        {   
            console.log(data[movie])
            htmlResult += `
                <h3>${data[movie].Title}</h3>
                <img src="${data[movie].Poster}" alt="Movie Poster">
                <p>${data[movie].Year}</p>
                <p>${data[movie].Type}</p>
                <hr>
            `
        }
        // <p>${data[movie].Ratings[0].Value}</p>
    return htmlResult
}

// Search:
// {Title: 'Spider-Man: No Way Home', 
//     Year: '2021', 
//     imdbID: 'tt10872600', 
//     Type: 'movie', 
//     Poster: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMm…TQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg'}

// Title:
