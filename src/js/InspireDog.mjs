import { loadHeaderFooter } from "./utils.mjs";
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
  <img
    class="dogInspire"
    src="${dog.message}"
    alt="randomDogPicture"
    />
    <h1>${quote.text}</h1>
    <h2>${author}</h2>`
}

loadHeaderFooter();
// getRandomDog(dogUrl);
// getRandomQuote(quoteUrl);

const card = new InspireMeCard()
card.init()