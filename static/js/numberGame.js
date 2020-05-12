let number = 1;
let bgColors = {
    blue: 'white',
    green: 'white',
    yellow: 'black',
    black: 'white',
    pink: 'white',
    brown: 'white',
    red: 'white'
}

displayNumber();

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
        number--;
        displayNumber();
    } else if (event.keyCode === 39) {
        number++;
        displayNumber();
    }
});

function displayNumber() {
    let numberHolder = document.getElementById('number');
    let container = document.querySelector('body');

    numberHolder.innerHTML = number;

    let randomNumber = Math.floor(Math.random() * Object.keys(bgColors).length);
    let randomColor = Object.keys(bgColors)[randomNumber]

    container.style.backgroundColor = randomColor;
    numberHolder.style.color = bgColors[randomColor];
}
