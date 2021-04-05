import {
    styleBtnLg,
    htmlBtnGroup,
    htmlBtn,
    styleBtnPrimary,
} from './example-code-template';

"use strict";

const html_BtnGroup = document.querySelectorAll('.html-btn-group');
const html_BtnPrimary = document.querySelectorAll('.html-btn-primary');
const style_BtnPrimary = document.querySelectorAll('.style-btn-primary');
const style_BtnLg = document.querySelectorAll('.style-btn-lg');

html_BtnPrimary.forEach(item => item.innerHTML = htmlBtn);
html_BtnGroup.forEach(item => item.innerHTML = htmlBtnGroup);
style_BtnPrimary.forEach(item => item.innerHTML = styleBtnPrimary);
style_BtnLg.forEach(item => item.innerHTML = styleBtnLg);
