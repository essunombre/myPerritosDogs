import { loadHeaderFooter } from "./utils.mjs";


console.log('soy l aprueba')
loadHeaderFooter();
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const breed = params.get('dog');
    const imageUrl = params.get('image');

    if (breed && imageUrl) {
      document.getElementById('breed-name').textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
      document.getElementById('dog-image').src = decodeURIComponent(imageUrl);
    } else {
      document.getElementById('breed-name').textContent = 'No breed specified';
      document.getElementById('dog-image').alt = 'No image available';
    }
  });