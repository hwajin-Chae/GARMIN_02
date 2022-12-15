// main-motion pic slide
new Swiper('main .promotion > .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 7000
  },
  slidesPerView: 1,
  // spaceBetween: 0,
  // centeredSlides: true,
});


// product-pic slide
new Swiper('main .new_product > .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1000
  },
  slidesPerView: 5,
});