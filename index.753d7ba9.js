var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequire04cb;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire04cb=s);var a=s("9hK8P");function o({multimedia:e,section:t,abstract:n,title:s,published_date:o,url:c,slug_name:r}){const i=e[2].url;return`\n  <div class="newsHomePage-card" data-id=${r}>\n  <div class="card-picture">\n      <img\n        class="newsHomePage-image"\n        src="${e.length?i:"https://placehold.co/400x400?text=NO+IMAGE"}"\n        alt="news cover"\n        width="288"\n        height="395"\n      />\n      <p class="newsHomePage-status-read">Already read</p>\n      <p class="newsHomePage-search-category">${t}</p>\n      \n      <button class="add-to-favBtn test-favBtn" type="button" data-id=${r}>Add to favourite\n                  <svg class="heart" width="16" height="16">\n                      <use href="/assets/svg/symbol-defs.svg#icon-unclicked_heart">\n                      </use>\n                  </svg>\n              </button>\n    </div>\n    <div>\n      <h2 class="newsHomePage-title">\n        ${s}\n      </h2>\n      <p class="newsHomePage-text">\n        ${function(e){let t=e;t.length>80&&(t=e.slice(0,80)+"...");return t}(n)}\n      </p>\n    </div>\n    <div class="homePage-readMore">\n      <p class="newsHomePage-date">${function(e){const t=new Date(e);return(0,a.default)(t,"dd/mm/yyyy")}(o)}</p>\n      <a class="newsHomePage-readMore-link" target = "_blank" href="${c}">Read more</a>\n    </div>\n  </div>\n  </div>`}var c=s("2shzp").default;const r="13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm",i="https://api.nytimes.com/svc/news/v3/content/section-list.json";function d(){const e=`${i}?api-key=${r}`;return c.get(e)}var l=s("kOvvy"),u=s("9tq7s");const g=new class{async getNews(){const e=`https://api.nytimes.com/svc/news/v3/content/inyt/${this.searchCategories}.json?api-key=${r}`;return await c.get(e)}constructor(){this.searchCategories=""}},h=document.querySelector(".newsHP-categories");h.addEventListener("click",(function(){y();document.querySelectorAll(".category").forEach((e=>{e.addEventListener("click",f)}))}));const m=document.querySelector(".categories"),p=document.querySelector("button.others");function w({display_name:e}){return`\n  <li class="category"><span>${e}</span></li>\n    `}function f(e){e.preventDefault();const t=e.target.textContent.toLowerCase();g.searchCategories=t;g.getNews().then((e=>{const t=e.data.results;if(null==t)return(0,u.default)(),void(document.getElementById("pagination-container").style.display="none");const n=document.querySelector(".gallery"),s=t.map((e=>o(e)));n.innerHTML=s.join(""),(0,l.addCategori)(t)}))}function y(){const e=document.querySelector(".categ-arrow-down"),t=document.querySelector(".others-arrow-down");m.classList.toggle("show"),m.classList.toggle("hidden"),e.classList.toggle("switchedImg"),t.classList.toggle("switchedImg"),h.classList.toggle("categoriesBtnOpened"),p.classList.toggle("othersBtnOpened")}!async function(){try{const e=(await d()).data.results;let t=[],n=window.matchMedia("(max-width: 767px)"),s=window.matchMedia("(min-width: 768px)"),a=window.matchMedia("(max-width: 1279px)");e.forEach(((e,o)=>{n.matches?t.push(w(e)):s.matches&&a.matches?o>=4&&t.push(w(e)):o>=6&&t.push(w(e))}));document.querySelector(".categories-list").insertAdjacentHTML("beforeend",t.join("")),m.addEventListener("click",y);document.querySelector("body");p.addEventListener("click",y);document.querySelectorAll(".category").forEach((e=>{e.addEventListener("click",f)}))}catch(e){console.log(e)}}();
//# sourceMappingURL=index.753d7ba9.js.map
