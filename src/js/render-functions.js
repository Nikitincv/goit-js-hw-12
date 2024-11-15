
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { gallery } from "../main";
const lightBox = new SimpleLightbox('.gallery a');


export function createMarkup (images) {
    const markup = images.map(img=>`
    <li class='gallery-item'><a class="gallery-link"  href="${img.largeImageURL}">
    <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}">
      </a>
    <ul class="card-info">
    <li class="card-info-item">
      <p>Like:${img.likes}</p>
    </li>
    <li class="card-info-item">
      <p>Views:${img.views}</p>
    </li>
    <li class="card-info-item">
      <p>Coments:${img.comments}</p>
    </li>
    <li class="card-info-item">
      <p>Downloads:${img.downloads}</p>
    </li></ul>
  </li>`).join("")
  gallery.insertAdjacentHTML("beforeend", markup)
  lightBox.refresh()
}