import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery } from "./render-functions.js";
import { divEl } from "../main.js";

export function searchFetch(searchValue) {
    const keyApi = "46092367-b3ded390d3bc77cfd15f53989";
    const divEl = document.querySelector(".gallery-section");
    fetch(`https://pixabay.com/api/?key=${keyApi}&q=${searchValue}&image_type=photo&safesearch=true&orientation=horizontal`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(images => {
            if (images.hits.length === 0) {
                iziToast.error({
                    backgroundColor: "#EF4040",
                    progressBarColor: "#FFBEBE",
                    position: "topCenter",
                    messageColor: "#FFFFFF",
                    icon: false,
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
                return;
            } else {
                createGallery(images.hits);
                return;
            }
        })
        .catch(error => console.log(error))
        .finally(divEl.classList.remove("loader"));
};