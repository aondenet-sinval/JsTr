const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let imgList = './images/pic1.jpg';
for (var i = 1; i < 6; i++) {
    imgList[i] + '.jpg';
}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', imgList);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
