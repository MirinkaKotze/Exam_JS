// SMOOTH-SCROLL
document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// HEADER-TITLE SLICK SLIDER
$(document).ready(() => {
  $(".header__slider--container").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    dotsClass: "vertical-dots",
  });
});

//  NEWS-CARDS SLICK SLIDER
$(document).ready(() => {
  $(".news__card--container").slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img class='news__arrow--prev slick-prev' src='./images/prev-arrow.svg'>",
    nextArrow:
      "<img class='news__arrow--next  slick-next' src='./images/next-arrow.svg'>",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
