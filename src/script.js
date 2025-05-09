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

let count = 0;
let add = 0;

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
