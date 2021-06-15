import PaginationButtonComponent from './pagination-button';

export default class PaginationContainer {
  constructor(videoInfoSection) {
    this.id = 'page-nav';
    this.element = null;
    this.videoInfoSection = videoInfoSection;
    this.numberOfPages = null;
    this.pageIndex = 0;
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'page-nav';
    this.element.id = this.id;
    this.createButtons(this.element, 2);
    document.body.appendChild(this.element);
    this.element = document.getElementById(this.id);
  }

  createButtons(element, span) {
    this.pageIndex = this.videoInfoSection.pageIndex;
    this.numberOfPages = this.videoInfoSection.numberOfPages;
    const leftShift = this.pageIndex - span;
    const rightShift = this.pageIndex + span;
    for (let i = leftShift; rightShift >= i && this.numberOfPages > i; i += 1) {
      if (i >= 0 && i === this.pageIndex) {
        element.appendChild(new PaginationButtonComponent(i, this.videoInfoSection)
          .createElement(i, true));
      } else if (i >= 0) {
        element.appendChild(new PaginationButtonComponent(i, this.videoInfoSection)
          .createElement(i));
      }
    }
  }

  deleteElement() {
    document.body.removeChild(this.element);
  }
}
