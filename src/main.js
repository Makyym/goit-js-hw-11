import { searchFetch } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export const divEl = document.querySelector(".gallery-section");
const formEl = document.querySelector("form");
const inputEl = formEl.elements.input;
const buttonEl = formEl.elements.button;
const loaderEl = document.querySelector("div");

function handleSearch(event) {
    event.preventDefault();
    if (inputEl.value.trim() === "") {
        iziToast.error({
            backgroundColor: "#EF4040",
            progressBarColor: "#FFBEBE",
            position: "topCenter",
            messageColor: "#FFFFFF",
            icon: "",
            message: `Please fill in the input field`,
            position: `topRight`,
        });
    } else {
        divEl.textContent = "";
        loaderEl.classList.add("loader");
        const searchValue = inputEl.value.trim();
        searchFetch(searchValue)
        .then(images => {
            if (images.hits.length === 0) {
                iziToast.error({
                    backgroundColor: "#EF4040",
                    progressBarColor: "#FFBEBE",
                    position: "topCenter",
                    messageColor: "#FFFFFF",
                    icon: false,
                    position: `topRight`,
                        message: "Sorry, there are no images matching your search query. Please try again!",
                    });
                    return
                } else {
                    divEl.insertAdjacentHTML("beforeend", createGallery(images.hits));
                    const galleryGrid = new SimpleLightbox('.gallery-section a', {
                        captions: true,
                        captionSelector: 'img',
                        captionType: 'attr',
                        captionsData: 'alt',
                        captionPosition: 'bottom',
                        captionDelay: 250,
                    });
                    galleryGrid.refresh()
                }})
            .catch(error => console.log(error))
            .finally(loaderEl.classList.remove("loader"))
    };
}

formEl.addEventListener("submit", () => handleSearch(event));