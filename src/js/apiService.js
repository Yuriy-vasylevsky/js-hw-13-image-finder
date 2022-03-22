export default class ApiServis {
  constructor() {
    this.pageNum = 1;
    this.search = ``;
  }

  fetchImage(e) {
    console.log(this);
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.search}&page=${this.pageNum}&per_page=12&key=26121578-e837ffea047e9540b4143728d`,
    )
      .then(response => response.json())
      .then(data => {
        console.log('🚀 ~ file: apiService.js ~ line 14 ~ ApiServis ~ fetchImage ~ data', data);
        this.pageNum += 1;
        return data.hits;
      });
  }

  resetPage() {
    this.pageNum = 1;
  }

  get qery() {
    return this.search;
  }

  set qery(newQery) {
    this.search = newQery;
  }
}
