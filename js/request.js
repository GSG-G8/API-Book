const searchQuery = document.querySelector('.search-query');
const searchBtn = document.querySelector('.search-btn');
const searchResults = document.querySelector('.search-results');

searchBtn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    const url = `http://openlibrary.org/search.json?q=${searchQuery.value}`;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('ready state');
            const obj = JSON.parse(xhr.responseText);console.log(obj)
            const link = obj.docs[0].title_suggest;console.log(link)
            // searchResults.textContent = link;
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
});
