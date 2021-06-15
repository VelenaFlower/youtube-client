export default class PaginationButtonComponent {
  constructor(pageNumber, videoSection) {
    this.pageNumber = pageNumber;
    this.videoSection = videoSection;
    this.element = null;
    this.showPopup = (event) => {
      event.preventDefault();
      if (event.target.tagName === 'BUTTON') {
        const app = document.getElementById('page-nav');

        app.insertAdjacentHTML('beforebegin',
          `<div class="popup">${event.target.textContent}</div>`);
      }
    };
    this.removePopup = () => {
      if (document.querySelector('.popup')) {
        document.querySelector('.popup').remove();
      }
    };
  }

  createElement(pageNumber, active = false) {
    this.element = document.createElement('button');
    this.element.textContent = pageNumber + 1;
    if (active) {
      this.element.className = 'active';
    }
    this.addEvent(pageNumber);
    return this.element;
  }

  addEvent(pageNumber) {
    this.element.addEventListener('click', () => {
      this.videoSection.clearInfoSection();
      this.videoSection.showArticles(this.videoSection.articlesOnPage * pageNumber);
    });
    this.element.addEventListener('mousedown', this.showPopup);
    this.element.addEventListener('mouseup', this.removePopup);
  }
}
