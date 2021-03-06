import './sass/main.scss';
import imageCard from './templates/imageCard.hbs';

// import API from `./js/apiService`;

// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ';
// const myKey = `26121578-e837ffea047e9540b4143728d`
// fetchImage(`cat`);
// const url = '';
// const options = {
//   headers: {
//     Authorization: '',
//   },
// };

const refs = {
  input: document.querySelector(`.search-form`),
  gallery: document.querySelector(`.gallery`),
  btn: document.querySelector(`.button`),
};

class GetImage {
  constructor({}) {
    this.pageNum = 1;
    this.search = ``;
  }

  fetchImage(e) {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${e}&page=${this.pageNum}&per_page=12&key=26121578-e837ffea047e9540b4143728d`,
    ).then(response => response.json());
  }

  onClick() {
    this.pageNum += 1;
    this.fetchImage(this.search).then(this.render).catch();
  }

  onSearch(e) {
    e.preventDefault();

    this.search = e.currentTarget.elements.query.value;
    this.onClick();
    this.fetchImage(search).then(this.render).catch();
  }

  render(e) {
    const marcup = imageCard(e);
    refs.gallery.insertAdjacentHTML(`beforeend`, marcup);
  }
}

const getImage = new GetImage({});

refs.input.addEventListener(`submit`, getImage.onSearch.bind(getImage));
refs.btn.addEventListener(`click`, getImage.onClick.bind(getImage));
