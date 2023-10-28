import Swiper from '../../../node_modules/swiper/dist/js/swiper';

/* -------------------------------------------------------------------------
  begin Reviews-video-carousel
* ------------------------------------------------------------------------- */

export default function initSwiper() {
  const popularDishesCarousel = new Swiper('#popular-dishes-carousel', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
      },
      6000: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '#section__popular-dishes-carousel .swiper-button-next',
      prevEl: '#section__popular-dishes-carousel .swiper-button-prev',
    },
  });

  const imagesCarousel = new Swiper('#images-carousel', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      6000: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '#tab-content__images-carousel .swiper-button-next',
      prevEl: '#tab-content__images-carousel .swiper-button-prev',
    },
  });
}

$('#information-tab').on('shown.bs.tab', (event) => {
  const openTab = event.target.getAttribute('href');

  $(openTab)
    .find('.swiper-container')[0]
    .swiper.update();
});

/* -------------------------------------------------------------------------
  end Reviews-video-carousel
* ------------------------------------------------------------------------- */
