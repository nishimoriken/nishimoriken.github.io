'use strict';

const bigImg = document.getElementById('bigimg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

const images = [
    'https://github.com/nishimoriken/nishimoriken.github.io/blob/main/images/img1.JPG?raw=true',
    'https://github.com/nishimoriken/nishimoriken.github.io/blob/main/images/img2.JPG?raw=true',
    'https://github.com/nishimoriken/nishimoriken.github.io/blob/main/images/img3.JPG?raw=true',
    'https://github.com/nishimoriken/nishimoriken.github.io/blob/main/images/img4.png?raw=true'
];

let currentIndex = 0;

function updateImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    bigImg.src = images[currentIndex];
    counter.textContent = (currentIndex + 1) + ' / ' + images.length;
}

prevBtn.addEventListener('click', function() {
    updateImage(currentIndex - 1);
});

nextBtn.addEventListener('click', function() {
    updateImage(currentIndex + 1);
});