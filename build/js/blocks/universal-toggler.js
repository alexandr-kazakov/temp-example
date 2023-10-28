/* -------------------------------------------------------------------------
  begin Tabs
* ------------------------------------------------------------------------- */

export default function universalTogglerInit() {
  const universalTogglers = document.querySelectorAll('.universal-toggler');

  universalTogglers.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      const { target } = event;

      $(target).slideUp();
      $(target)
        .next('.hidden')
        .slideDown();

      if (target.classList.contains('universal-toggler_checkout')) {
        document
          .getElementById('checkout-one')
          .querySelector('input[type=radio]:checked').checked = false;
      }
    });
  });
}

/* -------------------------------------------------------------------------
          end Tabs
  * ------------------------------------------------------------------------- */
