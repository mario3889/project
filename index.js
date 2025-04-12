const menuOpenButton = document.querySelector("#open-menu");
const menuCloseButton = document.querySelector("#close-menu");

menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());



const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    }
  }


})

 