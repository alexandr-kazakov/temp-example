/* -------------------------------------------------------------------------
  begin Tabs
* ------------------------------------------------------------------------- */

export default function tabsInit() {
  const checkoutFirstStepBtn = document.getElementById('checkout-first-step-btn');

  if (checkoutFirstStepBtn) {
    checkoutFirstStepBtn.addEventListener('click', () => {
      $('#checkout-two-tab').tab('show');
    });
  }
}

/* -------------------------------------------------------------------------
        end Tabs
* ------------------------------------------------------------------------- */
