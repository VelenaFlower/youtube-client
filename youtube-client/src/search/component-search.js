export default class Search {
  constructor(id, section) {
    this.options = {
      type: 'video',
      key: 'AIzaSyB1snbYfd_tKVJkdG_Ss5auTGaXuwUESzw',
      maxResults: '15',
    };
    this.id = id;
    this.url = 'https://www.googleapis.com/youtube/v3/';
    this.videoInfoSection = section;
    this.data = [];
  }

  createElement() {
    const wrapInput = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    wrapInput.className = 'search-container';
    label.className = 'label-input';
    label.htmlFor = this.id;

    input.type = 'text';
    input.id = this.id;
    input.placeholder = 'Enter Request';
    input.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.key === 'Enter') {
        this.videoInfoSection.clearInfoSection();
        this.data = [];
        this.request = document.getElementById(this.id).value.trim();
        this.initSearch(this.request);
      }
    });

    wrapInput.appendChild(label);
    label.appendChild(input);
    document.body.appendChild(wrapInput);
  }

  makeRequest(param) {
    return new Promise((resolve) => {
      let tempData;
      const url = new URL(this.url.concat('search'));
      this.options.part = 'snippet';
      this.options.q = param;
      Object.keys(this.options).forEach((val) => {
        url.searchParams.set(val, this.options[val]);
      });
      if (typeof this.nextPageToken !== 'undefined') {
        url.searchParams.set('pageToken', this.nextPageToken);
      }
      fetch(url).then(res => res.json()
        .then((data) => {
          tempData = data;
          this.nextPageToken = tempData.nextPageToken;
          this.handleReq(tempData.items);
        })
        .then(() => {
          this.makeSubRequest(tempData.items.map(val => val.id.videoId).join(','))
            .then(resolve);
        }));
    });
  }

  makeSubRequest(videos) {
    return new Promise((resolve) => {
      const url = new URL(this.url.concat('videos'));
      this.options.part = 'statistics';
      this.options.id = videos;
      Object.keys(this.options).forEach((val) => {
        url.searchParams.set(val, this.options[val]);
      });
      fetch(url).then(res => res.json()
        .then((data) => {
          const position = this.data.length - data.items.length;
          data.items.forEach((val, ind) => {
            this.data[position + ind].viewCount = val.statistics.viewCount;
          });
        }))
        .then(() => this.videoInfoSection.setData(this.data))
        .then(resolve);
    });
  }

  initSearch(param) {
    this.makeRequest(param).then(() => {
      this.videoInfoSection.showArticles(0);
    });
  }

  handleReq(data) {
    data.forEach((value) => {
      const result = {
        videoId: value.id.videoId,
        publishedAt: value.snippet.publishedAt,
        title: value.snippet.title,
        description: value.snippet.description,
        channelTitle: value.snippet.channelTitle,
        thumbnails: value.snippet.thumbnails,
      };
      this.data.push(result);
    });
  }
}
