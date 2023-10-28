import { switchDropdown, switchToggleBtn } from './select-box';

/* -------------------------------------------------------------------------
  begin Document
* ------------------------------------------------------------------------- */

function isClickInside(target, elem) {
  const checkResult = elem.contains(target);
  return checkResult;
}

function checkOpenDropdownMenu(event) {
  const { target } = event;
  const openMenuDropdowns = document.querySelectorAll('.dropdown-menu:not(.hidden)');

  openMenuDropdowns.forEach((elem) => {
    let menuBox = elem;
    let counter = 0;
    while (counter < 100) {
      if (menuBox.classList.contains('toggle-dropdown')) {
        break;
      }

      menuBox = menuBox.parentElement;
      counter += 1;
    }

    const result = isClickInside(target, menuBox);

    if (!result) {
      elem.classList.add('hidden');

      if (menuBox.querySelector('[data-dropdown-toggle-click]')) {
        menuBox.querySelector('[data-dropdown-toggle-click]').classList.remove('active');
      }
    }
  });
}

export default function documentInit() {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (document.querySelector('.select-box__dropdown.show')) {
      const openSelectDropdowns = document.querySelectorAll('.select-box__dropdown.show');

      openSelectDropdowns.forEach((elem) => {
        let selectBox = elem;
        let counter = 0;
        const selectToggleBtn = elem.previousElementSibling;

        while (counter < 100) {
          if (selectBox.classList.contains('select-box')) {
            break;
          }

          selectBox = selectBox.parentElement;
          counter += 1;
        }

        const result = isClickInside(target, selectBox);

        if (!result) {
          switchDropdown(elem);
          switchToggleBtn(selectToggleBtn);
        }
      });
    }

    if (document.querySelector('.dropdown-menu:not(.hidden)')) {
      checkOpenDropdownMenu(event);
    }
  });
}
/* -------------------------------------------------------------------------
    end Document
  * ------------------------------------------------------------------------- */
