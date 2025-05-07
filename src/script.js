const form = document.querySelector("form");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

const iconCart = document.getElementById("icon-cart");
const cartContainer = document.querySelector(".cart-container");

let count = 0;

plus.addEventListener("click", function () {
   count++;
   num.textContent = count;
});

minus.addEventListener("click", function () {
   if (count > 0) {
      count--;
   }
   num.textContent = count;
});

iconCart.addEventListener("click", function () {
   if (
      cartContainer.style.display === "none" ||
      cartContainer.style.display === ""
   ) {
      cartContainer.style.display = "block";
   } else {
      cartContainer.style.display = "none";
   }
});
