"use strict";

const toggleButtons = document.querySelectorAll('.highlight__btn');
const highlightWrap = document.querySelectorAll('.highlight__wrap');
const highlightBtnIcon = document.querySelectorAll('.highlight__btn--icon');

highlightWrap.forEach(item => item.style.height = '0');

toggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetEl = event.target;

        if(targetEl) {
            button.nextElementSibling.classList.toggle('show-wrap');

            if(button.nextElementSibling.classList.contains('show-wrap')) {
                showWrap(button.nextElementSibling);

                targetEl.firstElementChild.style = `transform: translate(0, -50%) rotate(90deg);`;
            } else {
                button.nextElementSibling.style = 'height: 0';

                targetEl.firstElementChild.style = `transform: translate(0, -50%) rotate(0deg);`;
            }
        }
    }, false);
})

function showWrap(wrapEl) {
    wrapEl.style.height = wrapEl.scrollHeight + 'px';
}
