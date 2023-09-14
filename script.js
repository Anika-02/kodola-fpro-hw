let images = document.querySelector('#image');
let button = document.querySelector('#btn-change-img');

button.addEventListener('click', () => {
    images.src = `img/${Math.round(Math.random() * 8 + 1)}.jpg`;
});