export function renderWithTemplate(template,parentElement,data,callback) 
{
  parentElement.insertAdjacentHTML('afterbegin', template)
  // if clear is true we need to clear out the contents of the parent.
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }  

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate('../partials/header.html');
    const headerElement = document.querySelector('#main-header');
    const footerTemplate = await loadTemplate('../partials/footer.html');
    const footerElement = document.querySelector('#main-footer');
  
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
  }

  // imageSlider
  export const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
    //handle scrollbar thumb drag
    scrollbarThumb.addEventListener('mousedown', (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
  
      // update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX -startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
  
  
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
  
          scrollbarThumb.style.left = `${boundedPosition}px`
          imageList.scrollLeft = scrollPosition;
      }
  
      //Remove event listeners on mouse up 
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
  
      //Event lisnter for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    })
  
    //Slide images according to the silide button click
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  
    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };
  
    const updateScrollThumbPosition = () => {
      console.log('holaperro')
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };
    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      updateScrollThumbPosition();
    });
  };

  // Function to add the dog image URL to favorites
export function addToFavorites(dogImageUrl) {
  let favorites = getLocalStorage('favorite-dogs');
  if (!favorites) {
    favorites = [];
  }

  if (!favorites.includes(dogImageUrl)) {
    favorites.push(dogImageUrl);
    setLocalStorage('favorite-dogs', favorites);
    alert('Dog added to favorites!');
  } else {
    alert('Dog is already in favorites!');
  }
}

// Local Storage utility functions
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}