import{i as u,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function f(i){const o="46092367-b3ded390d3bc77cfd15f53989",n=document.querySelector(".gallery-section");fetch(`https://pixabay.com/api/?key=${o}&q=${i}&image_type=photo&safesearch=true&orientation=horizontal`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){u.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,message:"Sorry, there are no images matching your search query. Please try again!"});return}else{m(t.hits);return}}).catch(t=>console.log(t)).finally(n.classList.remove("loader"))}const a=document.querySelector("form"),c=a.elements.input;a.elements.button;const l=document.querySelector(".gallery-section");function p(i){if(i.preventDefault(),l.textContent="",c.value.trim()==="")iziToast.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:"",message:"Please fill in the input field"});else{l.classList.add("loader");const o=c.value.trim();f(o)}}a.addEventListener("submit",()=>p(event));function m(i){const o=i.reduce((t,e)=>{const r=`<div class="img-card">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        <ul>
        <li>
        <h3>Likes</h3>
        <p>${e.likes}</p>
        </li>
        <li>
        <h3>Views</h3>
        <p>${e.views}</p>
        </li>
        <li>
        <h3>Comments</h3>
        <p>${e.comments}</p>
        </li>
        <li>
        <h3>Downloads</h3>
        <p>${e.downloads}</p>
        </li>
        </ul>
        </a>
        </div>`;return t+r},"");l.insertAdjacentHTML("beforeend",o),new d(".gallery-section a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}
//# sourceMappingURL=index.js.map
