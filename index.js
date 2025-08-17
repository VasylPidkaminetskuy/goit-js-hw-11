import{a as m,S as p,i as n}from"./assets/vendor-CaRFiM55.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function g(o){return m.get("https://pixabay.com/api/",{params:{key:"51801427-6d1e83aadfb04e423248c71b3",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:18}}).then(t=>t.data.hits)}let l=null;function h(){l?l.refresh():l=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function y({webformatURL:o,largeImageURL:t,tags:i,likes:s,views:e,comments:r,downloads:a}){return`<li class="gallery-item">
          <a class="gallery-item-link" href="${t}"> <img class="gallery-item-img" src="${o}" alt="${i}" /></a>
          <div class="gallery-description-container">
            <div class="gallery-img-info">
              <h5>Likes</h5>
              <p>${s}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Views</h5>
              <p>${e}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Comments</h5>
              <p>${r}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Downloads</h5>
              <p>${a}</p>
            </div>
          </div>
        </li>`}function b(o){return o.map(y).join("")}function L(){d.innerHTML=""}function v(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}const S={form:document.querySelector(".form"),buttonInput:document.querySelector(".js-button-search"),inputSearch:document.querySelector(".js-input-search"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")},{form:u,buttonInput:$,inputSearch:w,galleryList:d,loader:f}=S;u.addEventListener("submit",o=>{o.preventDefault(),v();const t=o.target.elements["search-text"].value.trim();if(!t){c(),n.show({message:"Введіть текст для пошуку",position:"topRight",backgroundColor:"#e74c3c",messageColor:"#fff"});return}L(),g(t).then(i=>{if(!i.length){n.show({message:`За запитом "${t}" не знайдено жодного результату.`,position:"topRight",backgroundColor:"#e74c3c",messageColor:"#fff"});return}const s=b(i);d.innerHTML=s,h()}).catch(i=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!error",backgroundColor:"#e74c3c",messageColor:"#fff"})}).finally(()=>{c()}),u.reset()});
//# sourceMappingURL=index.js.map
