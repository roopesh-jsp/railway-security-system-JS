"using strict";
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navBarLinks = document.querySelectorAll(".navLink");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("navOpen");
  navBarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("navOpen");
    });
  });
});
