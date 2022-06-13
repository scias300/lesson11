'use strict';

const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const btn1 = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const size = square.clientWidth;
document.querySelector('#range-span').textContent = range.value;


let changeColor = function () {
    square.style.backgroundColor = text.value;
};

let changeSize = function () {
    document.querySelector('#range-span').textContent = range.value;
    square.style.width = size * range.value / 100 + 'px';
    square.style.height = size * range.value / 100 + 'px';
    circle.style.width = size * range.value / 100 + 'px';
    circle.style.height = size * range.value / 100 + 'px';
};

btn.addEventListener('click', changeColor);

btn1.style.display = 'none';

range.addEventListener('input', changeSize);