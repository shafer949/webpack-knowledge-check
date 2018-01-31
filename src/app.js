const API_KEY = 'ProvideYourOwn!!!';
const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

const gifForm = document.querySelector('#gif-form');
const gifInput = gifForm.querySelector('#search-input');

const SearchGif = (input) => {
    return fetch(`${baseUrl}&q=${input}`)
        .then(res => res.json())
        .then(data => {
            return data.data;

    });
}

gifForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = gifInput.value;
    SearchGif(input)
});
