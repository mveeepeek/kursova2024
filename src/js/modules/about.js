var splide = new Splide("#about-slider", {
  type: "loop",
  gap: "40px",
  perPage: 3,
  focus: 0,
  omitEnd: true,
  pagination: false,
  autoWidth: true,
  breakpoints: {
    1140: {
      perPage: 2,
      autoWidth: false,
    },
    600: {
      perPage: 1,
      autoWidth: false,
    },
  },
});

splide.mount();
