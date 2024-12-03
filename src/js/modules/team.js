var splide = new Splide("#team-slider", {
  type: "loop",
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
      autoWidth: true,
    },
  },
});

splide.mount();
