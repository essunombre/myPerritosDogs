import { getLocalStorage } from "./utils.mjs";

// Function to display favorite dogs
export function displayFavoriteDogs() {
  const favoriteDogsContainer = document.getElementById(
    "favorite-dogs-container"
  );
  const favoriteDogs = getLocalStorage("favorite-dogs");

  if (favoriteDogs && favoriteDogs.length > 0) {
    favoriteDogsContainer.innerHTML = favoriteDogs
      .map(
        (dogUrl) => `
        <div class="favorite-dog">
          <img src="${dogUrl}" alt="Favorite Dog" class="favorite-dog-img" />
        </div>
      `
      )
      .join("");
  } else {
    favoriteDogsContainer.innerHTML = "<p>No favorite dogs added yet.</p>";
  }
}
