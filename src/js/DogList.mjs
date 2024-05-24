import { getAllBreeds } from "./Dog.mjs";
import { getRandomDog } from "./Dog.mjs";
const breedUrl = " https://dog.ceo/api/breeds/list/all";

async function populateBreedSelector(url) {
  const breedData = await getAllBreeds(url);
  const breedSelector = document.getElementById("breed-selector");
  const breeds = breedData.message;

  const breedOptions = Object.entries(breeds)
  .map(([breed, suBreeds]) => {
    if (suBreeds.length > 0) {
      return suBreeds
        .map((suBreed) => {
          const fullBreedName = `${breed}/${suBreed}`; // Swapped the positions of breed and subBreed
          return `<option value="${fullBreedName}">${capitalizeFirstLetter(
            fullBreedName
          )}</option>`;
        })
        .join("");
    } else {
      return `<option value="${breed}">${capitalizeFirstLetter(
        breed
      )}</option>`;
      }
    })
    .join("");
  breedSelector.innerHTML = breedOptions;
  //add event listener for the change on select
  breedSelector.addEventListener("change", function () {
    const selectedBreed = this.value;
    populateSlideshowImagesBreed(selectedBreed);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
  populateBreedSelector(breedUrl);
});

//Here I replace the corgis for the random sliders
export async function populateSlideshowImagesBreed(breed) {
  const urlBreed = `https://dog.ceo/api/breed/${breed}/images/random`;
  const imageElements = document.querySelectorAll(".image-item");
  for (let img of imageElements) {
    const randomDogImage = await getRandomDog(urlBreed);
    if (randomDogImage) {
      console.log(randomDogImage);
      img.src = randomDogImage.message;
    }
  }
}
