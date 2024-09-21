const formEl = document.querySelector(`form`);
const inputEl = formEl.elements.input;
const buttonEl = formEl.elements.button;
export const divEl = document.querySelector(".gallery-section");
import { searchFetch } from "./js/pixabay-api.js";

function handleSearch(event) {
    event.preventDefault();
    divEl.textContent = ""
    if (inputEl.value.trim() === "") {
        iziToast.error({
            backgroundColor: "#EF4040",
            progressBarColor: "#FFBEBE",
            position: "topCenter",
            messageColor: "#FFFFFF",
            icon: "",
            message: `Please fill in the input field`,
        });
    } else {
        divEl.classList.add("loader");
        const searchValue = inputEl.value.trim();
        searchFetch(searchValue);
    };
}

formEl.addEventListener("submit", () => handleSearch(event));