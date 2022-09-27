const trafficLight1El = document.querySelector('#trafficLight1');
const trafficLight2El = document.querySelector('#trafficLight2');
const trafficLight3El = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLight1El.style.background = ('green');
    trafficLight1El.removeEventListener('click', makeGreen);
    trafficLight1El.addEventListener('click', makeYellow);
}

trafficLight1El.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLight2El.style.background = ('yellow');
    trafficLight2El.removeEventListener('click', makeYellow);
    trafficLight2El.addEventListener('click', makeRed);
}

trafficLight2El.addEventListener('click', makeYellow);

function makeRed() {
    trafficLight3El.style.background = ('red');
    trafficLight3El.removeEventListener('click', makeRed);
    trafficLight3El.addEventListener('click', makeGreen);
}

trafficLight3El.addEventListener('click', makeRed);