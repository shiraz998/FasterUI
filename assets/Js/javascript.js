//-- Start Js Logo Slider ---- //
var swiper = new Swiper(".top-slider", {
    slidesPerView: "auto",
    spaceBetween: 73,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
    320: {
      // slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      // slidesPerView: 7,
      spaceBetween: 30,
    },
    1024: {
      // slidesPerView: 7,
      spaceBetween: 73,
    },
    1440: {
      // slidesPerView: 7,
      spaceBetween: 73,
    },
  }
});
//-- Close Js Logo Slider ---- //
//-- Start Js News Slider ---- //
var swiper = new Swiper(".news-slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    }
});
//-- Close Js News Slider ---- //

