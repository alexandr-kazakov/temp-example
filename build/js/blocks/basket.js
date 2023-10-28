/* -------------------------------------------------------------------------
     begin Basket
   * ------------------------------------------------------------------------- */

export default function basketInit() {
  const productCards = document.querySelectorAll('.product-card form');
  let basketCounter = 1;

  function basketAnimate(event) {
    event.preventDefault();

    basketCounter += 1;

    const baskets = document.querySelectorAll('.cart-box');

    baskets.forEach((elem) => {
      const basketQuantity = elem.querySelector('.cart-box__quantity-number');
      const basketPrice = elem.querySelector('.cart-box__value');
      const basketPriceNumber = elem.querySelector('.cart-box__value-number');

      basketQuantity.classList.remove('animate');
      basketPrice.classList.remove('animate');

      void elem.offsetWidth;

      basketQuantity.classList.add('animate');
      basketPrice.classList.add('animate');

      setTimeout(() => {
        basketQuantity.innerHTML = basketCounter;
      }, 200);
    });
  }

  productCards.forEach((elem) => {
    elem.addEventListener('submit', basketAnimate);
  });
}

/* -------------------------------------------------------------------------
     end Basket
   * ------------------------------------------------------------------------- */
