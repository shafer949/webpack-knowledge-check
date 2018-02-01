import './style.css'
require("html-loader?attrs=img:data-src!./index.html");


const API_KEY = 'KhHayXgP88Gdcqfv0cguPXd5ZbvwezWm';
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
