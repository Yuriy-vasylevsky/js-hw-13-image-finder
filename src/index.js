import './sass/main.scss';
import imageCard from './templates/imageCards.hbs';

// import API from `./js/apiService`;

// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ';
// const myKey = `26121578-e837ffea047e9540b4143728d`

function fetchImage(e) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${e}&page=1&per_page=12&key=26121578-e837ffea047e9540b4143728d`,
  ).then(response => response.json());
}

fetchImage(`cat`);
// const url = '';
// const options = {
//   headers: {
//     Authorization: '',
//   },
// };

const refs = {
  input: document.querySelector(`.search-form`),
  gallery: document.querySelector(`.gallery`),
};

imageCard;
refs.input;
console.log('🚀 ~ file: index.js ~ line 26 ~ refs.input', refs.input);
