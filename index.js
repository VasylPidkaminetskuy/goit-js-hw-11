import{a as c,S as u}from"./assets/vendor-dfkH-aUW.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){return c.get("https://pixabay.com/api/",{params:{key:"51801427-6d1e83aadfb04e423248c71b3",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:18}}).then(i=>i.data.hits)}let a=null;function f(){a?a.refresh():a=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function m({webformatURL:r,largeImageURL:i,tags:s,likes:o,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
          <a class="gallery-item-link" href="${i}"> <img class="gallery-item-img" src="${r}" alt="${s}" /></a>
          <div class="gallery-description-container">
            <div class="gallery-img-info">
              <h5>Likes</h5>
              <p>${o}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Views</h5>
              <p>${e}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Comments</h5>
              <p>${t}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Downloads</h5>
              <p>${n}</p>
            </div>
          </div>
        </li>`}function d(r){return r.map(m).join("")}const g={form:document.querySelector(".form"),buttonInput:document.querySelector(".js-button-search"),inputSearch:document.querySelector(".js-input-search"),galleryList:document.querySelector(".gallery")},{form:l,buttonInput:v,inputSearch:b,galleryList:y}=g;l.addEventListener("submit",r=>{r.preventDefault();const i=r.target.elements["search-text"].value.trim();p(i).then(s=>{const o=d(s);y.innerHTML=o,f()}),l.reset()});
//# sourceMappingURL=index.js.map
