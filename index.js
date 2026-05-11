// i= - ID
// t= - title
// s= search

const apiKey = "56ebccac"

let movieTitle = ""
let myWatchlist = []
let searchList = []

const serchInput = document.getElementById("search-input")
const serchResult = document.getElementById("serch-result")

document.addEventListener('submit', function(e){
    e.preventDefault()
    searchMovie()
})

document.addEventListener('click', function(e){
    let element = String(e.target.id)
    if (( element === "search-input") || ( element === "")){
        return
    } else {
        searchList.forEach(function(movie){
            if (movie.imdbID === element){
                myWatchlist.push(movie)
                console.log(myWatchlist)
            }
        })
        // Test local storage
        localStorage.setItem("myWatchlist", JSON.stringify(myWatchlist))
    }
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
            searchList.push(data[movie])
            htmlResult += `
                <div id="movie-result">
                    <img src="${data[movie].Poster}" alt="Movie Poster">
                    <div id="movie-data">
                        <h3>${data[movie].Title}</h3>
                        <p>${data[movie].Year}</p>
                        <p>${data[movie].Type}</p>
                        <button class="add-movie" id=${data[movie].imdbID}>+ Watchlist</button>
                    </div>
                </div>
                <hr>
            `
        }
    // console.log(searchList)
    return htmlResult
}

