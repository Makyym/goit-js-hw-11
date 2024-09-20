import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(`form`);
const inputEl = formEl.elements.input;
const buttonEl = formEl.elements.button;
const keyApi = "46092367-b3ded390d3bc77cfd15f53989";

function handleSearch(event) {
    event.preventDefault();
    if (inputEl.value.trim() === "") {
        iziToast.error({
                backgroundColor: "#803232",
                progressBarColor: "#FFBEBE",
                position: "topCenter",
                messageColor: "#FFFFFF",
                icon: "",
                message: `Please fill in the input field`,
            });
    } else {
        const searchValue = inputEl.value.trim();
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
                        backgroundColor: "#803232",
                        progressBarColor: "#FFBEBE",
                        position: "topCenter",
                        messageColor: "#FFFFFF",
                        icon: false,
                        message: "Sorry, there are no images matching your search query. Please try again!",
                    });
                    return;
                } else {
                    console.log(images.hits);
                    return images.hits;
                }
            })
            .catch(error => console.log(error));
    }
};

formEl.addEventListener("submit", () => handleSearch(event));
