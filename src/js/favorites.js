import { loadHeaderFooter } from "./utils.mjs";
import { displayFavoriteDogs } from "./FavoriteList.mjs";

loadHeaderFooter();
console.log("I am the favorites page");

// Call the function to display favorite dogs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  displayFavoriteDogs();
});
