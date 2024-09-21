import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { divEl } from "../main.js";

export function createGallery(values) {
    const gallery = values.reduce((acc, value) => {
        const galleryItem = `<div class="img-card">
        <a href="${value.largeImageURL}">
        <img src="${value.webformatURL}" alt="${value.tags}" />
        <ul>
        <li>
        <h3>Likes</h3>
        <p>${value.likes}</p>
        </li>
        <li>
        <h3>Views</h3>
        <p>${value.views}</p>
        </li>
        <li>
        <h3>Comments</h3>
        <p>${value.comments}</p>
        </li>
        <li>
        <h3>Downloads</h3>
        <p>${value.downloads}</p>
        </li>
        </ul>
        </a>
        </div>`;
        return acc + galleryItem;
    }, "")
    divEl.insertAdjacentHTML("beforeend", gallery);
    const galleryGrid = new SimpleLightbox('.gallery-section a', {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
    galleryGrid.refresh();
    return;
};