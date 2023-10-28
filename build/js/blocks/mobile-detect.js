/* -------------------------------------------------------------------------
  begin mobileDetect
* ------------------------------------------------------------------------- */

export default function mobileDetect() {
  if (/iPad|iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent)) {
    document.body.classList.add('mobile');
  }
}

/* -------------------------------------------------------------------------
  end mobileDetect
 * ------------------------------------------------------------------------- */
