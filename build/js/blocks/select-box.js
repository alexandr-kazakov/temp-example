/* -------------------------------------------------------------------------
  begin Select-Box
* ------------------------------------------------------------------------- */

export function switchDropdown(dropdown) {
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  } else {
    dropdown.classList.add('show');
  }
}

export function switchToggleBtn(toggleBtn) {
  if (toggleBtn.classList.contains('active')) {
    toggleBtn.classList.remove('active');
  } else {
    toggleBtn.classList.add('active');
  }
}

function switchSelectOption(event) {
  let { target } = event;
  let selectBox = false;
  let activeIndex;

  while (!selectBox) {
    if (target.classList.contains('select-box')) {
      selectBox = target;
      target = this;
      break;
    }
    target = target.parentElement;
  }

  const selectBoxDropdown = selectBox.querySelector('.select-box__dropdown');
  const dropdownToggleBtn = selectBox.querySelector('.select-box__dropdown-toggle');

  if (target.classList.contains('active')) {
    switchDropdown(selectBoxDropdown);
    switchToggleBtn(dropdownToggleBtn);
    return;
  }

  selectBoxDropdown.querySelector('.active').classList.remove('active');
  target.classList.add('active');

  selectBoxDropdown.querySelectorAll('.select-box__dropdown-item').forEach((elem, index) => {
    if (elem.classList.contains('active')) {
      activeIndex = index;
    }
  });

  const formSelect = selectBox.querySelector('.select-box__true-select');

  formSelect.querySelector('[selected]').removeAttribute('selected');
  formSelect
    .querySelectorAll('.select-box__option')
    [activeIndex].setAttribute('selected', 'selected');

  switchDropdown(selectBoxDropdown);

  dropdownToggleBtn.querySelector('.select-box__dropdown-toggle-text').innerHTML = target.innerHTML;
  switchToggleBtn(dropdownToggleBtn);
}

function selectClickEventHandler(event) {
  const { target } = event;
  const dropdown = target.nextElementSibling;

  switchDropdown(dropdown);
  switchToggleBtn(target);
}

export default function selectBoxesInit() {
  const selectBoxes = document.querySelectorAll('.select-box');

  selectBoxes.forEach((elem, index) => {
    const selectBoxItems = selectBoxes[index].querySelectorAll('.select-box__dropdown-item');

    selectBoxItems.forEach((el, number) => {
      selectBoxItems[number].addEventListener('click', switchSelectOption);
    });

    selectBoxes[index]
      .querySelector('.select-box__dropdown-toggle')
      .addEventListener('click', selectClickEventHandler);
  });

  $('.select-box').trigger('change');
}

window.selectBoxesUpdate = function () {
  selectBoxesInit();
};

/* -------------------------------------------------------------------------
    end Select-Box
  * ------------------------------------------------------------------------- */
