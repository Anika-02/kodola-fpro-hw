let input = document.querySelector('#text-field');
let mainWrapper = document.querySelector('#main-wrapper');

let newDiv = document.createElement('div');
newDiv.style.height = '300px';
newDiv.style.width = '300px';
newDiv.style.backgroundColor = '#baf1e7';
newDiv.style.borderRadius = "30px";
newDiv.style.margin = '80px';

input.addEventListener('mouseenter', () => {
    mainWrapper.appendChild(newDiv);
});

input.addEventListener('mouseleave', () => {
    mainWrapper.removeChild(newDiv);
});