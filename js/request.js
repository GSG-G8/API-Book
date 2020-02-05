const show = document.querySelector(".show-movie");
const searchQuery = document.querySelector('.search-query');
const searchBtn = document.querySelector('.search-btn');
const searchResults = document.querySelector('.search-results');

searchBtn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery.value}`;
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('ready state');
            const obj = JSON.parse(xhr.responseText);console.log(obj)
            const link = obj.items[0].volumeInfo.title;console.log(link);
            const title = document.createElement('p');
            title.textContent = link;
            searchResults.appendChild(title);

            const img = document.createElement('img');
            img.src = obj.items[0].volumeInfo.imageLinks.thumbnail;
            searchResults.appendChild(img);
            
            const authors = document.createElement('p');
            authors.textContent = obj.items[0].volumeInfo.authors;
            searchResults.appendChild(authors);

            const publisher = document.createElement('p');
            publisher.textContent = obj.items[0].volumeInfo.publisher;
            searchResults.appendChild(publisher);
            

            const pageCount=document.createElement('p');
            pageCount.textContent = obj.items[0].volumeInfo.pageCount;
            searchResults.appendChild(pageCount);

            const categories=document.createElement('p');
            categories.textContent = obj.items[0].volumeInfo.categories[0];
            searchResults.appendChild(categories);

            const language=document.createElement('p');
            language.textContent = obj.items[0].volumeInfo.language;
            searchResults.appendChild(language);

            const description=document.createElement('p');
            description.textContent = obj.items[0].volumeInfo.description;
            searchResults.appendChild(description);
        }}
            xhr.open('GET', url, true);
            xhr.send();
         
          
            const mykey = configObj.MY_KEY;
            const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${mykey}&query=${search-query.value}`;
            const xhr1 = new XMLHttpRequest();
            xhr1.onreadystatechange = () => {
            if (xhr1.readyState === 4 && status === 200) {
            const movie = JSON.parse(xhr1.responseText);
            show.textContent = movie.genres[0].name;console.log(movie)

        }
    };
  
    xhr1.open("GET", urlMovies, true);
    xhr1.send();
});
