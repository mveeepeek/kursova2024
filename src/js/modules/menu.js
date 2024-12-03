var splide = new Splide("#menu-slider", {
  gap: "40px",
  perPage: 4,
  perMove: 1,
  pagination: false,
  breakpoints: {
    1440: {
      perPage: 3,
    },
    968: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
});

splide.mount();

const categoryBtns = document.querySelectorAll(".category-btn");
const menuItems = document.querySelectorAll(".menu-item");
const splideList = document.querySelector("#menu-slider .splide__list");

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    categoryBtns.forEach((btn) => btn.classList.remove("active"));
    showCategoryItems(e.target.dataset.category);
    btn.classList.add("active");
  });
});

function showCategoryItems(category) {
  menuItems.forEach((item) => {
    splideList.style.transform = "translateY(0px)";
    if (category === "all") {
      item.style.display = "block";
      splide.go(0);
      return;
    }
    if (category === item.dataset.category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
