import { loadHeaderFooter } from "./utils.mjs";
import { populateSlideshowImages } from "./DogSlides.mjs";
import { initSlider } from "./utils.mjs";

loadHeaderFooter();

document.addEventListener('DOMContentLoaded', (event) =>{
    populateSlideshowImages()
})

window.addEventListener("load", initSlider('.images-list'));
