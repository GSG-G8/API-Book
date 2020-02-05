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
            const obj = JSON.parse(xhr.responseText);

            const item = document.createElement('div');
            item.classList.add('item');

            const img = document.createElement('img');
            img.src = obj.items[0].volumeInfo.imageLinks.thumbnail;
            img.classList.add('cover');
            item.appendChild(img);

            const title = document.createElement('strong');
            title.textContent = `Title: ${obj.items[0].volumeInfo.title}`;
            item.appendChild(title);
            
            const authors = document.createElement('p');
            authors.textContent = `Authors: ${obj.items[0].volumeInfo.authors}`;
            item.appendChild(authors);

            const publisher = document.createElement('p');
            publisher.textContent = `Publisher: ${obj.items[0].volumeInfo.publisher}`;
            item.appendChild(publisher);
            

            const pageCount=document.createElement('p');
            pageCount.textContent = `Page count: ${obj.items[0].volumeInfo.pageCount}`;
            item.appendChild(pageCount);

            const categories=document.createElement('p');
            categories.textContent = `Category: ${obj.items[0].volumeInfo.categories[0]}`;
            item.appendChild(categories);

            const language=document.createElement('p');
            language.textContent = `Language: ${obj.items[0].volumeInfo.language}`;
            item.appendChild(language);

            const description=document.createElement('p');
            description.textContent = obj.items[0].volumeInfo.description;
            description.classList.add('desc');
            item.appendChild(description);

            searchResults.appendChild(item);
        }}
            xhr.open('GET', url, true);
            xhr.send();
         
          
            const mykey = configObj.MY_KEY;
            const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${mykey}&query=${searchQuery.value}`;
            const xhr1 = new XMLHttpRequest();
            xhr1.onreadystatechange = () => {
            if (xhr1.readyState === 4 && status === 200) {
            const movie = JSON.parse(xhr1.responseText);
           
        }
    };
  
    xhr1.open("GET", urlMovies, true);
    xhr1.send();
});
