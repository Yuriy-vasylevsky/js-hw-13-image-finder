import './sass/main.scss';
import imageCard from './templates/imageCard.hbs';
import IpiServis from './js/apiService.js';

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

const apiServis = new IpiServis();

class GetImage {
  constructor({}) {
    // this.pageNum = 1;
    // this.search = ``;
  }

  onClick() {
    apiServis.fetchImage().then(this.render).catch();
  }

  onSearch(e) {
    e.preventDefault();

    apiServis.qery = e.currentTarget.elements.query.value;
    // if (apiServis.qery === '') {
    //   return alert(`Введите запрос`);
    // }
    apiServis.resetPage();
    apiServis
      .fetchImage()
      .then(hits => {
        refs.gallery.innerHTML = '';
        k;
        this.render(hits);
      })
      .catch();
  }

  render(hits) {
    console.log(hits);

    const marcup = imageCard(hits);
    // console.log('🚀 ~ file: index2.js ~ line 47 ~ GetImage ~ render ~ marcup', marcup);

    refs.gallery.insertAdjacentHTML(`beforeend`, imageCard(hits));
  }
}

const getImage = new GetImage({});

refs.input.addEventListener(`submit`, getImage.onSearch.bind(getImage));
refs.btn.addEventListener(`click`, getImage.onClick.bind(getImage));
