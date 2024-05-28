
import { getRandomDog } from "./Dog.mjs";
import { getRandomQuote } from "./Quote.mjs";

const dogUrl = "https://dog.ceo/api/breeds/image/random";
const quoteUrl = "https://type.fit/api/quotes";

export default class InspireMeCard {
  constructor() {
    this.dog = {};
    this.quote = {};
  }
  async init() {
    this.dog = await getRandomDog(dogUrl);
    this.quote = await getRandomQuote(quoteUrl);
    this.renderCardDetails("main");
  }

  renderCardDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterBegin",
      quoteTemplate(this.dog, this.quote)
    );
  }
}

function quoteTemplate(dog, quote) {
// Remove ", type.fit" from the end of the author field
  const author = quote.author.replace(", type.fit", "");
  return `
  <div class="inspiration">
  <h1>Inspire me!</h1>
  <img
    class="dogInspire"
    src="${dog.message}"
    alt="randomDogPicture"
    />
    <h1>${quote.text}</h1>
    <h2>${author}</h2></div>`
}

export function downloadDogImage(imageUrl) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'dog_image.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function clearInspiration(){
  document.querySelector('.inspiration').innerHTML = ''
}