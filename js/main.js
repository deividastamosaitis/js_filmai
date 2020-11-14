
const search = document.querySelector('.search-box');

search.addEventListener('keypress', searchMovie);

console.log(search);
function searchMovie (e){
    if (e.keyCode === 13){
        movieName = search.value;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.omdbapi.com/?apikey=e4db3ced&t='+movieName);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                let movie = JSON.parse(xhr.responseText); //successfully
                console.log(movie);
                if (movie.Response === "True"){
                    document.getElementById('startRow').innerHTML = "";
                    // removeRow.remove();
                    document.querySelector('h2').innerHTML = movie.Title;
                    document.getElementById('director').innerHTML = "Director: " + movie.Director;
                    document.getElementById('imdb').innerHTML = "Imdb: " + movie.imdbRating;
                    document.getElementById('poster').innerHTML = "<img src=\"" + movie.Poster + "\">";
                }else {
                    alert("There's no movie with that name! Try another name.");
                }
            } 
        }
        xhr.send();
    }
    
}




