import { loadHeaderFooter } from "./utils.mjs";
import { populateSlideshowImages, initSlider } from "./DogSlides.mjs";

loadHeaderFooter();

document.addEventListener('DOMContentLoaded', (event) =>{
    populateSlideshowImages()
})

window.addEventListener("load", initSlider);
