// i= - ID
// t= - title
const apiKey = "56ebccac"

let movieTitle = ""

const serchInput = document.getElementById("search-input")
const serchResult = document.getElementById("serch-result")

document.addEventListener('submit', function(e){
    e.preventDefault()
    searchMovie()
})

function searchMovie(){
    movieTitle = "t=" + serchInput.value
    console.log(movieTitle)
    searchOmdb(movieTitle, apiKey)
}

function searchOmdb (movieTitle, apiKey){
    fetch(`http://www.omdbapi.com/?${movieTitle}&apikey=${apiKey}`)
        .then(respond => respond.json())
        .then(data => {
            serchResult.innerHTML = getMovieResult(data)

        })
}

function getMovieResult(data) {
    let htmlResult = `
        <h3>${data.Title}</h3>
        <img src="${data.Poster}" alt="Movie Poster">
        <p>${data.Runtime}</p>
        <p>${data.Genre}</p>
        <p>${data.Metascore}</p>
        <p>${data.Ratings[0].Value}</p>
        <p>${data.Plot}</p>
        <hr>
    `
    return htmlResult
}
