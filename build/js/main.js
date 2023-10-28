import './libraries/polyfills';
import mobileDetect from './blocks/mobile-detect';

import '../../node_modules/bootstrap/js/dist/modal';
import '../../node_modules/bootstrap/js/dist/tab';
import '../../node_modules/bootstrap/js/dist/collapse';
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox';
import '../../node_modules/jquery-bar-rating/dist/jquery.barrating.min';
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2';

import alertInit from './blocks/alert';
import inputMaskInit from './blocks/inputmask';
import initSwiper from './blocks/swiper-carousel';
import headerScrollInit from './blocks/header-scroll';
import dropdownInit from './blocks/dropdown';
import mobileMenunInit from './blocks/mobile-menu';
import selectBoxesInit from './blocks/select-box';
import yandexMapInit from './blocks/yandex-map';
import ratingInit from './blocks/rating';
import tabsInit from './blocks/tabs';
import universalTogglerInit from './blocks/universal-toggler';
import basketInit from './blocks/basket';

import documentInit from './blocks/document';

document.addEventListener('DOMContentLoaded', () => {
  mobileDetect();

  if (document.querySelector('.alert__close-btn')) {
    console.log('init Alert Success');
    alertInit();
  }

  if (document.querySelector('input[type="tel"]')) {
    console.log('init InputMask  Success');
    inputMaskInit();
  }

  if (document.querySelector('.swiper-container')) {
    console.log('init Swiper Success');
    initSwiper();
  }

  if (document.querySelector('.header_theme_white')) {
    console.log('init Header Scroll Success');
    headerScrollInit();
  }

  if (
    document.querySelector('[data-dropdown-toggle-click]')
    || document.querySelector('[data-dropdown-toggle-hover]')
  ) {
    console.log('init Dropdown Success');
    dropdownInit();
  }

  if (document.querySelector('#mobile-menu')) {
    console.log('init MobileMenu Success');
    mobileMenunInit();
  }

  if (document.querySelector('.select-box')) {
    console.log('init Select-Boxes Success');
    selectBoxesInit();
  }

  if (document.querySelector('.yandex-map')) {
    console.log('init Yandex Map Success');
    yandexMapInit();
  }

  if (document.querySelector('.stars-rating-select')) {
    console.log('init Rating Success');
    ratingInit();
  }

  if (document.querySelector('.nav-tabs')) {
    console.log('init Tabs Success');
    tabsInit();
  }

  if (document.querySelector('.universal-toggler')) {
    console.log('init Universal Toggler Success');
    universalTogglerInit();
  }

  if (document.querySelector('.product-card')) {
    console.log('init Basket Success');
    basketInit();
  }

  documentInit();
});
