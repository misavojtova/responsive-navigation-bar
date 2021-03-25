"use strict";

const nav = document.querySelector(".nav");
const toggleColl = document.querySelector(".toggle-collapse");

toggleColl.addEventListener("click", () => {
  nav.classList.toggle("collapse");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) nav.classList.remove("collapse");
});
