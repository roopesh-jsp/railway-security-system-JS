"using strict";
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navBarLinks = document.querySelectorAll(".navLink");
const loginbtn = document.querySelector(".loginbtn");
const usernameInput = document.querySelector(".username-input");
let username = "";
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("navOpen");
    navBarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("navOpen");
      });
    });
  });
}
