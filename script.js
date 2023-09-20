let image = document.querySelector('#image');
let prevBtn = document.querySelector('#btn-prev');
let nextBtn = document.querySelector('#btn-next');
let count = 1;

prevBtn.addEventListener('click', () => {
    count--;
    if(count === 1) {
        prevBtn.style.visibility = 'hidden';
    }
    else if (count === 0) {
        count = 1;
        image.src = 'img/1.jpg';
        prevBtn.style.visibility = 'hidden';
    }
    image.src=`img/${count}.jpg`;
    nextBtn.style.visibility = 'visible';
});

nextBtn.addEventListener('click', () => {
    prevBtn.style.visibility = 'visible';
    count++;
    if(count === 9){
        nextBtn.style.visibility = 'hidden';
    }
    image.src = `img/${count}.jpg`;
});