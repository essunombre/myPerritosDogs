import { loadHeaderFooter } from "./utils.mjs";
import InspireMeCard from "./InspireDog.mjs";
import { downloadDogImage } from "./InspireDog.mjs";
import { clearInspiration } from "./InspireDog.mjs";

loadHeaderFooter();
// getRandomDog(dogUrl);
// getRandomQuote(quoteUrl);

const card = new InspireMeCard();
card.init();

// Add event listener to the button to download the dog image
document.querySelector(".btn.downloadDog").addEventListener("click", () => {
  downloadDogImage(card.dog.message);
});

document.querySelector(".getRandomPicture").addEventListener("click", () => {
  clearInspiration();
  console.log("you clicked me");
  card.init();
  const inspirationImage = document.querySelector(
    ".static-container .inspiration"
  );

  // Debugging: Log the image element before changes
  console.log("Before changes:", inspirationImage);

  // Clear the inspiration content (assuming clearInspiration function is defined elsewhere)
  clearInspiration();
  console.log("You clicked me");

  // Show the image and apply the shake animation
  inspirationImage.classList.remove("hidden");
  inspirationImage.classList.add("shake");

  // Debugging: Log the image element after changes
  console.log("After adding shake:", inspirationImage);

  // Remove shake animation after it completes
  setTimeout(() => {
    inspirationImage.classList.remove("shake");
    // Hide the image after shaking
    inspirationImage.classList.add("hidden");

    // Debugging: Log the image element after hiding
    console.log("After hiding:", inspirationImage);
  }, 2500); // Match the duration of the shake animation
});
