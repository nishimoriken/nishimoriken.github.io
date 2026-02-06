'use strict';

const thumbs = document.querySelectorAll('.thumb');
const bigImg = document.getElementById('bigimg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

let currentIndex = 0;
const images = Array.from(thumbs).map(thumb => thumb.dataset.image);

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

thumbs.forEach(function(item, index) {
    item.onclick = function() {
        updateImage(index);
    }
});