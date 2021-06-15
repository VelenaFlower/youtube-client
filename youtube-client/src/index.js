import Search from './search/component-search';
import VideoSection from './video-info/video-items';
import './styles.css';

const fontAwesome = document.createElement('link');
fontAwesome.type = 'text/css';
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://use.fontawesome.com/releases/v5.8.2/css/all.css';
fontAwesome.integrity = 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay';
fontAwesome.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesome);

const section = new VideoSection({});
const search = new Search('search', section);
section.setSearch(search);

search.createElement();
section.createElement();
