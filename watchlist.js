
const watchlistResult = document.getElementById("watchlist-result")
let myWatchlist = []

document.addEventListener('click', function(e){
    let element = String(e.target.id)
        for (let movie = 0; movie < myWatchlist.length; movie++){
            if (myWatchlist[movie].imdbID === element){
                myWatchlist.splice(movie,1)
                console.log(myWatchlist)
                watchlistResult.innerHTML = getMovieResult(myWatchlist)
            }
        }
        // // Test local storage
        // localStorage.setItem("myWatchlist", JSON.stringify(myWatchlist))
    }
)

function showWatchlist(){
    myWatchlist = JSON.parse(localStorage.getItem("myWatchlist"))
    watchlistResult.innerHTML = getMovieResult(myWatchlist)
}

function getMovieResult(data) {
    let htmlResult = ""
    for (let movie = 0; movie < data.length ; movie++)
        {   
            htmlResult += `
                <h3>${data[movie].Title}</h3>
                <img src="${data[movie].Poster}" alt="Movie Poster">
                <p>${data[movie].Year}</p>
                <p>${data[movie].Type}</p>
                <button class="del-movie" id=${data[movie].imdbID}>- Remove</button>
                <hr>
            `
        }
    return htmlResult
}

showWatchlist()
