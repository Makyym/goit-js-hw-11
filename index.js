import{i as l,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){const i={key:"46092367-b3ded390d3bc77cfd15f53989",q:s,image_type:"photo",safesearch:!0,orientation:"horizontal"},o=new URLSearchParams(i);return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const c=document.querySelector(".gallery-section"),a=document.querySelector("form"),u=a.elements.input;a.elements.button;const d=document.querySelector("div");function m(s){if(s.preventDefault(),u.value.trim()==="")l.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:"",message:"Please fill in the input field",position:"topRight"});else{c.textContent="",d.classList.add("loader");const i=u.value.trim();f(i).then(o=>{if(o.hits.length===0){l.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}else c.insertAdjacentHTML("beforeend",h(o.hits)),new p(".gallery-section a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}).catch(o=>console.log(o)).finally(d.classList.remove("loader"))}}a.addEventListener("submit",()=>m(event));function h(s){return s.reduce((o,t)=>{const e=`<li class="img-card">
        <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
        <ul>
        <li>
        <h3>Likes</h3>
        <p>${t.likes}</p>
        </li>
        <li>
        <h3>Views</h3>
        <p>${t.views}</p>
        </li>
        <li>
        <h3>Comments</h3>
        <p>${t.comments}</p>
        </li>
        <li>
        <h3>Downloads</h3>
        <p>${t.downloads}</p>
        </li>
        </ul>
        </a>
        </li>`;return o+e},"")}
//# sourceMappingURL=index.js.map
