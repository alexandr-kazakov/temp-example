/* -------------------------------------------------------------------------
  begin Dropdown
* ------------------------------------------------------------------------- */

function dropdownMenuSwitch(event) {
  const { target } = event;
  const dropdonw = target.nextElementSibling;
  const toggler = target.classList.contains('toggle-dropdown__toggler');

  if (dropdonw.classList.contains('hidden')) {
    dropdonw.classList.remove('hidden');
    if (toggler) target.classList.add('active');
  } else {
    dropdonw.classList.add('hidden');
    if (toggler) target.classList.remove('active');
  }
}

export default function dropdownInit() {
  const clickDropdowns = document.querySelectorAll('[data-dropdown-toggle-click]');

  clickDropdowns.forEach((elem) => {
    elem.addEventListener('click', dropdownMenuSwitch);
  });

  if (document.body.classList.contains('mobile')) return;

  const hoverDropdowns = document.querySelectorAll('[data-dropdown-toggle-hover]');

  hoverDropdowns.forEach((elem) => {
    elem.addEventListener('mouseover', () => {
      elem.nextElementSibling.classList.remove('hidden');
    });

    elem.parentElement.addEventListener('mouseleave', (event) => {
      event.target.querySelector('.dropdown').classList.add('hidden');
    });
  });
}

/* -------------------------------------------------------------------------
        end Dropdown
 * ------------------------------------------------------------------------- */
