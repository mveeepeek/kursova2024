const menuBurger = document.querySelector(".menu-burger");
const stickOverlay = document.querySelector(".stick-overlay");
const stickMenuWrap = document.querySelector(".stick-menu-wrap");
const stickLayout = document.querySelector(".stick-layout");
const crossBtn = document.querySelector(".cross-btn");
const siteLinks = document.querySelectorAll(".stick-menu-item li");

siteLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

menuBurger.addEventListener("click", () => {
  stickOverlay.style.opacity = "1";
  stickOverlay.style.zIndex = "111";
  stickMenuWrap.style.transform = "translateX(0)";
});

crossBtn.addEventListener("click", closeMobileMenu);
stickOverlay.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  stickOverlay.style.opacity = "0";
  stickOverlay.style.zIndex = "-35";
  stickMenuWrap.style.transform = "translateX(-100%)";
}
