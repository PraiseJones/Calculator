const section = document.querySelector('.container');
const equal = document.querySelector('#equal');
const colorTwo = document.querySelector('bg').style.color = aqua;

var newColor;

equal.addEventListener('click', (e)=> {
    e.preventDefault();
    section.style.background = colorTwo;
})