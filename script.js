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
const cctvArr = ["past recording", "suspicious", "live recording", "back"];
let adminInterface = document.querySelector(".adminInterface ");
// console.log(adminInterface);
// function cctv() {
//   adminInterface.forEach((x, i) => {
//     x.textContent = `${cctvArr[i]}`;
//   });
// }

// let buttons = "";
// for (let i = 0; i < 3; i++) {
//   buttons += "<button>${cctvArr[i]}</button>";
// }
// adminInterface.insertAdjacentHTML(buttons);
