const menu = document.querySelector("#menu");
const ulNavbar = document.querySelector("#ul-navbar");

menu.addEventListener("click", function() {
  ulNavbar.classList.toggle("slide");
});