const mykey = configObj.MY_KEY;

const search = document.querySelector(".search-query");
const searchBtn = document.querySelector('.search-btn');
const show = document.querySelector(".show-movie");
const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${mykey}&query=${search.value}`;

searchBtn.addEventListener('click', function() {
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && status === 200) {
    const movie = JSON.parse(xhr.responseText);
    show.textContent = movie.genres[0].name;console.log(movie)
  }
};
xhr.open("GET", urlMovies, true);
xhr.send();
});
