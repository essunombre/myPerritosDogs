import { loadHeaderFooter } from "./utils.mjs";
import { populateSlideshowImagesBreed } from "./DogList.mjs";
import { initSlider } from "./utils.mjs";

loadHeaderFooter()

document.addEventListener('DOMContentLoaded', (event) =>{
    populateSlideshowImagesBreed('maltese')
    console.log('perro')
})
// scroll for slider
window.addEventListener("load", initSlider());

