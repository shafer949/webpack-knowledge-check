import React from "react";
import ReactDOM from "react-dom";
import './style.css'

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <form id="gif-form">
                    <input id="gif-search-input" type="text" />
                    <button id="gif-search-button">search</button>
                </form>
            <div id="gif-container">
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
const BASE_URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=`;
const DEFAULT_IMAGE_SRC = 'https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif';
const DEFAULT_URL = 'http://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif';
const GIF_LIMIT = 5;
const gifForm = document.querySelector('#gif-form');
const input = gifForm.querySelector('#gif-search-input');
const gifContainer = document.querySelector('#gif-container');

const focusInput = () => {           
    input.focus();
}

focusInput();

const addChildren = (parent, index) => {
    const container = parent.appendChild(document.createElement('div'));
    container.className = 'gif-image-container';
    const link = container.appendChild(document.createElement('a'));
    const image = link.appendChild(document.createElement('img'));
    container.id = index != undefined ? 'gif-image-container-' + index : 'gif-image-container-welcome';
};

const setWelcomeGif = (parent) => {
    addChildren(parent);

    const container = parent.querySelector('#gif-image-container-welcome')
    const link = container.querySelector('a');
    const image = link.querySelector('img');
    image.src = DEFAULT_IMAGE_SRC;
    link.setAttribute('href', DEFAULT_URL);
};

setWelcomeGif(document.querySelector('#gif-container'));

gifForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const gifInput = gifForm.querySelector('#gif-search-input');
    const searchText = gifInput.value;
   
    fetchGifs(searchText)
    .then(udpdateFields);
});

const fetchGifs = (searchTerm) => {
   return fetch(`${BASE_URL}${searchTerm}`)
    .then(res => res.json())
    .then(data => data.data.filter((item, index) => {
        return index <= GIF_LIMIT && index;
    }))
};

const udpdateFields = (data) => {
    const gifContainer = document.querySelector('#gif-container');
    removeChildren(gifContainer);

    if(data.length){
        data.map((results, index, arr) => {
            addChildren(gifContainer,index);
            const container = gifContainer.querySelector('#gif-image-container-' + index)
            const link = container.querySelector('a');
            const image = link.querySelector('img');           
            image.src = arr[index].images.original.url;
            link.setAttribute('href', arr[index].images.original.url);
        });
    }else{
        setWelcomeGif(gifContainer);
    }
};

const removeChildren = (parent) => {
    while(parent.hasChildNodes()){
        parent.removeChild(parent.lastChild)
    }
};
