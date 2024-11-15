/* empty css                      */import{a as L,S as w,i as o}from"./assets/vendor-DgUTYsMS.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();async function f(r,a){const e=new URLSearchParams({key:"45431575-a54d9a4f673da9f6ecaf0fabb",page:a,per_page:15,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),{data:n}=await L(`https://pixabay.com/api/?${e}`);return n}const b=new w(".gallery a");function h(r){const a=r.map(e=>`
    <li class='gallery-item'><a class="gallery-link"  href="${e.largeImageURL}">
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
      </a>
    <ul class="card-info">
    <li class="card-info-item">
      <p>Like:${e.likes}</p>
    </li>
    <li class="card-info-item">
      <p>Views:${e.views}</p>
    </li>
    <li class="card-info-item">
      <p>Coments:${e.comments}</p>
    </li>
    <li class="card-info-item">
      <p>Downloads:${e.downloads}</p>
    </li></ul>
  </li>`).join("");m.insertAdjacentHTML("beforeend",a),b.refresh()}const l=document.querySelector(".loader"),d=document.querySelector(".load-more"),p=document.querySelector(".search-form"),m=document.querySelector(".gallery");let g=0,i=1,c="";p.addEventListener("submit",S);async function S(r){r.preventDefault(),m.innerHTML="";const{search:a}=r.currentTarget.elements;if(c=a.value.trim(),i=1,c==="")return o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});l.classList.remove("isheaden");try{const e=await f(c,i);if(e.hits.length===0)return d.classList.add("isheaden"),o.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});h(e.hits),y(),g=Math.ceil(e.totalHits/15),p.reset(),e.totalHits>15&&d.classList.remove("isheaden")}catch(e){o.error({position:"topRight",message:e.message})}finally{l.classList.add("isheaden")}}d.addEventListener("click",v);async function v(){l.classList.remove("isheaden"),i+=1;try{const r=await f(c,i);if(h(r.hits),y(),g===i)return d.classList.add("isheaden"),o.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){o.error({position:"topRight",message:r.message})}finally{l.classList.add("isheaden")}}function y(){const{height:r}=m.firstElementChild.getBoundingClientRect();console.log(r),window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
