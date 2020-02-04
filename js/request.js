searchBtn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    const url = `http://openlibrary.org/search.json?q=`;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const obj = JSON.parse(xhr.responseText);
            const link = obj.docs;
            
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
});
