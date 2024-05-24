import { getRandomDog } from "./Dog.mjs";

const dogUrl = "https://dog.ceo/api/breeds/image/random";

//This controls the slider

//Here I replace the corgis for the random sliders
export async function populateSlideshowImages() {
  const imageElements = document.querySelectorAll(".image-item");
  for (let img of imageElements) {
    const randomDogImage = await getRandomDog(dogUrl);
    if (randomDogImage) {
      // console.log(randomDogImage)
      img.src = randomDogImage.message;
    }
  }
}