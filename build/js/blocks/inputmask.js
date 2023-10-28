/* -------------------------------------------------------------------------
      begin Mask Phone
* ------------------------------------------------------------------------- */

import Inputmask from 'inputmask';

export default function inputMaskInit() {
  const inputsTel = document.querySelectorAll('input[type="tel"]');
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  }).mask(inputsTel);

  const inputsDate = document.querySelectorAll('input[data-mask-type="date"]');
  Inputmask({
    mask: '99.99.9999',
    showMaskOnHover: false,
  }).mask(inputsDate);
}

/* -------------------------------------------------------------------------
        end Mask Phone
* ------------------------------------------------------------------------- */
