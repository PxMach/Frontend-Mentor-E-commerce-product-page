const form = document.querySelector("form");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const cartEmpty = document.querySelector(".cart-empty ");
const numElements = document.querySelectorAll(".num");
const cartCount = document.querySelector(".cart-count");

const iconCart = document.getElementById("icon-cart");
const cartContainer = document.querySelector(".cart-container");
const addition = document.querySelector(".addition");
const cartContent = document.querySelector(".cart-content");
const addCart = document.getElementById("add-cart");

//Select the main thumbnail images
const mainImages = document.querySelectorAll(".box-image img");
const thumbnails = document.querySelectorAll(".thumbnail-image img");

// Selecting lightbox elements
const lightbox = document.querySelector(".lightbox");
const closeLightbox = document.querySelector(".close-lightbox");
const lightboxImages = document.querySelectorAll(".lightbox-images img");
const lightboxThumbnails = document.querySelectorAll(
   ".lightbox-thumbnails img"
);
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let count = 0;
let add = 0;

// image change management
thumbnails.forEach((thumbnail, index) => {
   thumbnail.addEventListener("click", function () {
      //hide all main img
      mainImages.forEach((img) => {
         img.style.display = "none";
      });
      // display the img selected
      mainImages[index].style.display = "block";

      // Update active thumbnail status
      thumbnails.forEach((thumb) => {
         thumb.classList.remove("active");
      });
      thumbnail.classList.add("active");
   });
});

// Open the lightbox by clicking on the main image
mainImages.forEach((img) => {
   img.addEventListener("click", () => {
      lightbox.classList.add("active");
      // dislay the same image in lightbox
      const currentIndex = Array.from(mainImages).indexOf(img);
      updateLightboxImage(currentIndex);
   });
});

// close the lightbox
closeLightbox.addEventListener("click", () => {
   lightbox.classList.remove("active");
});

// nav in the lightbox
let currentImageIndex = 0;

function updateLightboxImage(index) {
   lightboxImages.forEach((img) => (img.style.display = "none"));
   lightboxImages[index].style.display = "block";

   lightboxThumbnails.forEach((thumb) => thumb.classList.remove("active"));
   lightboxThumbnails[index].classList.add("active");

   currentImageIndex = index;
}

// Thumbnail management in the lightbox

lightboxThumbnails.forEach((thumbnail, index) => {
   thumbnail.addEventListener("click", () => {
      updateLightboxImage(index);
   });
});
// Boutons précédent/suivant
prevBtn.addEventListener("click", () => {
   currentImageIndex =
      (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
   updateLightboxImage(currentImageIndex);
});

nextBtn.addEventListener("click", () => {
   currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
   updateLightboxImage(currentImageIndex);
});

// Fermer la lightbox avec la touche Escape
document.addEventListener("keydown", (e) => {
   if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
   }
});

// Click the button + or - for the number of product
plus.addEventListener("click", function () {
   count++;
   numElements.forEach((num) => {
      num.textContent = count;
   });
   add = 125 * count;
   addition.textContent = `$${add}`;
   updateCartCount();
});

minus.addEventListener("click", function () {
   if (count > 0) {
      count--;
   }
   numElements.forEach((num) => {
      num.textContent = count;
   });
   add = 125 * count;
   addition.textContent = `$${add}`;
   updateCartCount();
});

function updateCartCount() {
   if (count > 0) {
      cartCount.style.display = "block";
      cartCount.textContent = count;
   } else {
      cartCount.style.display = "none";
   }
}

// for display your cart
iconCart.addEventListener("click", function () {
   if (
      cartContainer.style.display === "none" ||
      cartContainer.style.display === ""
   ) {
      cartContainer.style.display = "block";
   } else if (count === 0 || cartContainer.style.display === "block") {
      cartContainer.style.display = "none";
   }
});

// for add the product in the cart
addCart.addEventListener("click", function (e) {
   e.preventDefault(); // Empêche la soumission de la page
   if (count === 0) {
      cartContent.style.display = "none";
      cartEmpty.style.display = "block";
   } else {
      cartContent.style.display = "block";
      cartEmpty.style.display = "none";
   }
});
