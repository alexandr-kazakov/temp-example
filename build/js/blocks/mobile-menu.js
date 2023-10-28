/* -------------------------------------------------------------------------
  begin Mobile menu
* ------------------------------------------------------------------------- */

export default function mobileMenunInit() {
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');

  const mobileMenuOpenBtn = document.getElementById('header-sandwich');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-sandwich');

  mobileMenuOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    overlay.classList.add('show');
  });

  mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('show');
  });
}

/* -------------------------------------------------------------------------
          end Mobile menu
   * ------------------------------------------------------------------------- */
