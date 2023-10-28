/* -------------------------------------------------------------------------
  begin Header
* ------------------------------------------------------------------------- */

/* begin Window Resize */
function actualResizeHandler() {
  const header = document.getElementById('header');

  if (
    window.pageYOffset > 0
    && window.innerWidth > 767
    && !header.classList.contains('scroll-active')
  ) {
    header.classList.add('scroll-active');
  }

  if (window.innerWidth <= 767 && header.classList.contains('scroll-active')) {
    header.classList.remove('scroll-active');
  }
}

function resizeThrottler() {
  let resizeTimeout;
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();
    }, 66);
  }
}

/* end Window Resize */

function checkScroll() {
  const header = document.getElementById('header');

  if (
    window.pageYOffset > 0
    && window.innerWidth > 767
    && !header.classList.contains('scroll-active')
  ) {
    header.classList.add('scroll-active');
  }

  if (
    window.pageYOffset <= 0
    && window.innerWidth > 767
    && header.classList.contains('scroll-active')
  ) {
    header.classList.remove('scroll-active');
  }
}

export default function headerScrollInit() {
  checkScroll();

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', resizeThrottler);
}

/* -------------------------------------------------------------------------
        end Header
   * ------------------------------------------------------------------------- */
