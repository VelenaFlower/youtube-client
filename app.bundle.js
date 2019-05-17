!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var i=n(1);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: #343d46;\n  overflow: hidden;\n}\n\n.search-container {\n  margin: 15px auto;\n  overflow: hidden;\n  text-align: center;\n}\n\n.label-input {\n  width: 60%;\n}\n\n.label-input:before {\n  content: "🔍";\n  position: relative;\n  left: 30px;\n  z-index: 2;\n}\n\n.search-container input {\n  width: 70%;\n  font-size: 20px;\n  padding-left: 35px;\n  border-radius: 10px;\n  border: solid transparent;\n  background-color: #fff;\n}\n\n.search-container input:focus {\n  background-color: #bebebe;\n  border: 2px solid #bebebe;\n  outline: none;\n}\n\n.video-section {\n  display: flex;\n  justify-content: center;\n  height: 70vh;\n  /* overflow-y: hidden; */\n}\n\n.video-info {\n  display: grid;\n  grid-template-rows: max-content max-content max-content max-content auto;\n  grid-template-columns: 40vh;\n  padding: 10px 0;\n  margin: 10px 40px;\n  border-radius: 10px;\n  background-color: #CED8E1;\n  text-align: center;\n  animation: zoomIn .7s linear;\n}\n\n.video-info:hover {\n  background-color: #F97493;\n  box-shadow: 0 0 5px 3px #792A40;;\n  -webkit-transform: scale(1.05);\n  transform: scale(1.05);\n  transition: .3s;\n  cursor: grab;\n}\n\n.video-info header {\n  position: relative;\n}\n\n.video-info header img {\n  width: 40vh;\n}\n\n.video-info header a {\n  display: grid;\n  position: absolute;\n  top: 30%;\n  max-height: 69%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #6E3795;\n  text-decoration: none;\n  font-size: 3vh;\n  font-family: sans-serif;\n  color: #fff;\n}\n\n.video-info header a:hover {\n  color: #ADDFE6;\n  cursor: pointer;\n  transition: .3s;\n}\n\n.video-info div {\n  margin: 1vh;\n}\n\n.video-info div i {\n  margin: 0.5vh 0.5vh 0.5vh 2vh;\n  font-size: 3.5vh;\n  opacity: 0.8;\n  float: left;\n}\n\n.video-info div span {\n  font-size: 3vh;\n  font-weight: 700;\n  font-family: sans-serif;\n}\n\n.description {\n  padding: 5px;\n  overflow: hidden;\n  font-family: sans-serif;\n  font-size: 2.7vh;\n}\n\n.page-nav {\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n}\n\n.page-nav button {\n  width: 4vh;\n  height: 4vh;\n  margin: 0 5px;\n  font-size: 1.5vh;\n  font-weight: 800;\n  border-radius: 50%;\n  color: #000;\n  border: solid #fff;\n  background-color: #fff;\n}\n\n.page-nav button.active,\n.page-nav button:hover {\n  color: #fff;\n  background-color: #323232;\n  cursor: pointer;\n}\n\n.popup {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 25%;\n  width: 35px;\n  height: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  color: #e3e3e3;\n  background: #323232;\n  border-radius: 50%;\n  font-size: 20px;\n  line-height: 35px;\n  box-shadow: 0 0 50px #4495cc;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}var r;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(o=0;o<e.length;o++){var r=e[o];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(e,t,n){var i,o,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),c=null,l=0,h=[],d=n(4);function u(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=s[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(b(i.parts[r],t))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(b(i.parts[r],t));s[i.id]={id:i.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):n.push(i[r]={id:r,parts:[a]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return g(t,e.attrs),f(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,i,o,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var r=l++;n=c||(c=v(t)),i=w.bind(null,n,r,!1),o=w.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),f(e,t),t}(t),i=function(e,t,n){var i=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(i=d(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return u(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var r=n[o];(a=s[r.id]).refs--,i.push(a)}e&&u(p(e,t),t);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);class i{constructor(e={}){this.options=JSON.parse(JSON.stringify(e))}createElement(){const e=document.createElement("article"),t=document.createElement("header"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),s=document.createElement("p");return 0!==Object.keys(this.options).length&&(e.className="video-info",this.fillHeader(t),this.fillPublisherContainer(n),this.fillPublishDateContainer(i),this.fillViewCountContainer(o),this.fillDescription(s)),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(o),e.appendChild(s),e}fillHeader(e){const t=document.createElement("img"),n=document.createElement("a");t.src=this.options.thumbnails.medium.url,t.alt="Thumbnails image",n.href="https://www.youtube.com/watch?v=".concat(this.options.videoId),n.textContent=this.options.title,e.appendChild(t),e.appendChild(n)}fillPublisherContainer(e){const t=document.createElement("i"),n=document.createElement("span");t.className="fas fa-user",n.className="publisher",n.textContent=this.options.channelTitle,e.appendChild(t),e.appendChild(n)}fillPublishDateContainer(e){const t=document.createElement("i"),n=document.createElement("span");t.className="far fa-calendar-alt",n.className="publish-date",n.textContent=new Date(this.options.publishedAt).toLocaleDateString(),e.appendChild(t),e.appendChild(n)}fillViewCountContainer(e){const t=document.createElement("i"),n=document.createElement("span");t.className="far fa-eye",n.className="view-count",n.textContent=this.options.viewCount,e.appendChild(t),e.appendChild(n)}fillDescription(e){const t=e;t.className="description",t.textContent=this.options.description}}class o{constructor(e,t){this.pageNumber=e,this.videoSection=t,this.element=null,this.showPopup=(e=>{if(e.preventDefault(),"BUTTON"===e.target.tagName){document.getElementById("page-nav").insertAdjacentHTML("beforebegin",`<div class="popup">${e.target.textContent}</div>`)}}),this.removePopup=(()=>{document.querySelector(".popup")&&document.querySelector(".popup").remove()})}createElement(e,t=!1){return this.element=document.createElement("button"),this.element.textContent=e+1,t&&(this.element.className="active"),this.addEvent(e),this.element}addEvent(e){this.element.addEventListener("click",()=>{this.videoSection.clearInfoSection(),this.videoSection.showArticles(this.videoSection.articlesOnPage*e)}),this.element.addEventListener("mousedown",this.showPopup),this.element.addEventListener("mouseup",this.removePopup)}}class s{constructor(e){this.id="page-nav",this.element=null,this.videoInfoSection=e,this.numberOfPages=null,this.pageIndex=0}createElement(){this.element=document.createElement("div"),this.element.className="page-nav",this.element.id=this.id,this.createButtons(this.element,2),document.body.appendChild(this.element),this.element=document.getElementById(this.id)}createButtons(e,t){this.pageIndex=this.videoInfoSection.pageIndex,this.numberOfPages=this.videoInfoSection.numberOfPages;const n=this.pageIndex-t,i=this.pageIndex+t;for(let t=n;i>=t&&this.numberOfPages>t;t+=1)t>=0&&t===this.pageIndex?e.appendChild(new o(t,this.videoInfoSection).createElement(t,!0)):t>=0&&e.appendChild(new o(t,this.videoInfoSection).createElement(t))}deleteElement(){document.body.removeChild(this.element)}}n(0);const r=new class{constructor(e={}){this.data=JSON.parse(JSON.stringify(e)),this.element=null,this.navigationContainer=null,this.currentIndex=0,this.pageIndex=0,this.articlesOnPage=0,this.numberOfPages=0,this.mouseStartPosition=0,this.mouseEndPosition=0,this.search=null,this.shift=0,this.down=(e=>{this.mouseStartPosition=e.pageX||e.changedTouches[0].pageX,this.mouseEndPosition=this.mouseStartPosition,this.element.addEventListener("mousemove",this.move),this.element.addEventListener("touchmove",this.move)}),this.move=(e=>{this.mouseEndPosition=e.pageX||e.changedTouches[0].pageX,this.shift=this.mouseEndPosition-this.mouseStartPosition,this.element.style.transform="translate(".concat(this.shift).concat("px)")}),this.up=(()=>{this.element.removeEventListener("mousemove",this.move),this.element.removeEventListener("touchmove",this.move),this.element.style.transform="translate(0px)",this.shift<-10?this.currentIndex<this.data.length-this.articlesOnPage&&(this.currentIndex+=this.articlesOnPage,this.clearInfoSection(),this.showArticles(this.currentIndex)):this.shift>10&&(this.currentIndex>=this.articlesOnPage?(this.currentIndex-=this.articlesOnPage,this.clearInfoSection(),this.showArticles(this.currentIndex)):(this.currentIndex=0,this.clearInfoSection(),this.showArticles(this.currentIndex)))})}createElement(){this.element=document.createElement("section"),this.element.className="video-section",this.element.id="video-section",document.body.appendChild(this.element),this.element=document.getElementById("video-section"),this.addMouseEvent(),this.addTouchEvent(),this.navigationContainer=new s(this),this.navigationContainer.createElement(),window.addEventListener("resize",()=>{this.clearInfoSection(),this.showArticles(this.currentIndex)})}setData(e){this.data=JSON.parse(JSON.stringify(e))}setSearch(e){this.search=e}showArticles(e){this.currentIndex=e;const t=this.data.length,n=window.innerWidth;this.articlesOnPage=Math.floor(n/(.4*window.innerHeight+80))||1,this.numberOfPages=Math.ceil(t/this.articlesOnPage);let o=e+this.articlesOnPage;o=o>t?t:o,this.pageIndex=this.currentIndex/this.articlesOnPage,t-e<5&&this.search.makeRequest(this.search.request).then(()=>(this.clearInfoSection(),this.showArticles(e)));for(let t=e;t<o;t+=1)this.element.appendChild(new i(this.data[t]).createElement());this.navigationContainer.createElement()}clearInfoSection(){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.navigationContainer.deleteElement()}addMouseEvent(){this.element.addEventListener("mousedown",this.down),this.element.addEventListener("mouseup",this.up)}addTouchEvent(){this.element.addEventListener("touchstart",this.down),this.element.addEventListener("touchend",this.up)}}({}),a=new class{constructor(e,t){this.options={type:"video",key:"AIzaSyB1snbYfd_tKVJkdG_Ss5auTGaXuwUESzw",maxResults:"15"},this.id=e,this.url="https://www.googleapis.com/youtube/v3/",this.videoInfoSection=t,this.data=[]}createElement(){const e=document.createElement("div"),t=document.createElement("label"),n=document.createElement("input");e.className="search-container",t.className="label-input",t.htmlFor=this.id,n.type="text",n.id=this.id,n.placeholder="Enter Request",n.addEventListener("keyup",e=>{e.preventDefault(),"Enter"===e.key&&(this.videoInfoSection.clearInfoSection(),this.data=[],this.request=document.getElementById(this.id).value.trim(),this.initSearch(this.request))}),e.appendChild(t),t.appendChild(n),document.body.appendChild(e)}makeRequest(e){return new Promise(t=>{let n;const i=new URL(this.url.concat("search"));this.options.part="snippet",this.options.q=e,Object.keys(this.options).forEach(e=>{i.searchParams.set(e,this.options[e])}),void 0!==this.nextPageToken&&i.searchParams.set("pageToken",this.nextPageToken),fetch(i).then(e=>e.json().then(e=>{n=e,this.nextPageToken=n.nextPageToken,this.handleReq(n.items)}).then(()=>{this.makeSubRequest(n.items.map(e=>e.id.videoId).join(",")).then(t)}))})}makeSubRequest(e){return new Promise(t=>{const n=new URL(this.url.concat("videos"));this.options.part="statistics",this.options.id=e,Object.keys(this.options).forEach(e=>{n.searchParams.set(e,this.options[e])}),fetch(n).then(e=>e.json().then(e=>{const t=this.data.length-e.items.length;e.items.forEach((e,n)=>{this.data[t+n].viewCount=e.statistics.viewCount})})).then(()=>this.videoInfoSection.setData(this.data)).then(t)})}initSearch(e){this.makeRequest(e).then(()=>{this.videoInfoSection.showArticles(0)})}handleReq(e){e.forEach(e=>{const t={videoId:e.id.videoId,publishedAt:e.snippet.publishedAt,title:e.snippet.title,description:e.snippet.description,channelTitle:e.snippet.channelTitle,thumbnails:e.snippet.thumbnails};this.data.push(t)})}}("search",r);r.setSearch(a),a.createElement(),r.createElement()}]);
//# sourceMappingURL=app.bundle.js.map