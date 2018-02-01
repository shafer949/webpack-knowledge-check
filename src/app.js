import React from "react";
import ReactDOM from "react-dom";
import './style.css'

class App extends React.Component {
    render(){
        return (
            <div className="container">
                 <form id="gif-form">
                    <input id="search-input" type="text" placeholder="Get yo search on!"/>
                    <button id="search-button">search</button>
                </form>
            <div id="gif-container">
                <img src="https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif" alt="giphy"/>
                <p>https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif</p>
            </div>
            </div>
        );
    }
}

ReactDOM.render( 
    <App />,
    document.querySelector('#root')
);

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