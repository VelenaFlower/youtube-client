import VideoInfo from './video-info-component';
import PaginationContainer from '../pagination/pagination-container';

export default class VideoSection {
  constructor(data = {}) {
    this.data = JSON.parse(JSON.stringify(data));
    this.element = null;
    this.navigationContainer = null;
    this.currentIndex = 0;
    this.pageIndex = 0;
    this.articlesOnPage = 0;
    this.numberOfPages = 0;
    this.mouseStartPosition = 0;
    this.mouseEndPosition = 0;
    this.search = null;
    this.shift = 0;

    this.down = (downEvent) => {
      this.mouseStartPosition = downEvent.pageX || downEvent.changedTouches[0].pageX;
      this.mouseEndPosition = this.mouseStartPosition;
      this.element.addEventListener('mousemove', this.move);
      this.element.addEventListener('touchmove', this.move);
    };
    this.move = (moveEvent) => {
      this.mouseEndPosition = moveEvent.pageX || moveEvent.changedTouches[0].pageX;
      this.shift = this.mouseEndPosition - this.mouseStartPosition;
      this.element.style.transform = 'translate('.concat(this.shift).concat('px)');
    };
    this.up = () => {
      this.element.removeEventListener('mousemove', this.move);
      this.element.removeEventListener('touchmove', this.move);
      this.element.style.transform = 'translate(0px)';
      if (this.shift < -10) {
        if (this.currentIndex < this.data.length - this.articlesOnPage) {
          this.currentIndex += this.articlesOnPage;
          this.clearInfoSection();
          this.showArticles(this.currentIndex);
        }
      } else if (this.shift > 10) {
        if (this.currentIndex >= this.articlesOnPage) {
          this.currentIndex -= this.articlesOnPage;
          this.clearInfoSection();
          this.showArticles(this.currentIndex);
        } else {
          this.currentIndex = 0;
          this.clearInfoSection();
          this.showArticles(this.currentIndex);
        }
      }
    };
  }

  createElement() {
    this.element = document.createElement('section');
    this.element.className = 'video-section';
    this.element.id = 'video-section';

    document.body.appendChild(this.element);
    this.element = document.getElementById('video-section');
    this.addMouseEvent();
    this.addTouchEvent();

    this.navigationContainer = new PaginationContainer(this);
    this.navigationContainer.createElement();

    window.addEventListener('resize', () => {
      this.clearInfoSection();
      this.showArticles(this.currentIndex);
    });
  }

  setData(data) {
    this.data = JSON.parse(JSON.stringify(data));
  }

  setSearch(search) {
    this.search = search;
  }

  showArticles(startIndex) {
    this.currentIndex = startIndex;
    const dataL = this.data.length;
    const windowWidth = window.innerWidth;
    this.articlesOnPage = Math.floor(windowWidth / ((window.innerHeight * 0.4) + 40 * 2)) || 1;
    this.numberOfPages = Math.ceil(dataL / this.articlesOnPage);
    let endIndex = startIndex + this.articlesOnPage;
    endIndex = endIndex > dataL ? dataL : endIndex;
    this.pageIndex = this.currentIndex / this.articlesOnPage;

    if (dataL - startIndex < 5) {
      this.search.makeRequest(this.search.request).then(() => {
        this.clearInfoSection();
        return this.showArticles(startIndex);
      });
    }
    for (let i = startIndex; i < endIndex; i += 1) {
      this.element.appendChild(new VideoInfo(this.data[i]).createElement());
    }
    this.navigationContainer.createElement();
  }

  clearInfoSection() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
    this.navigationContainer.deleteElement();
  }

  addMouseEvent() {
    this.element.addEventListener('mousedown', this.down);
    this.element.addEventListener('mouseup', this.up);
  }

  addTouchEvent() {
    this.element.addEventListener('touchstart', this.down);
    this.element.addEventListener('touchend', this.up);
  }
}
