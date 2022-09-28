const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightE1.addEventListener('click', makeBlack);

}

trafficLightEl.addEventListener('click', makeGreen);


function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeBlack);
}

trafficLightE2.addEventListener('click', makeYellow);


function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeBlack);
}

trafficLightE3.addEventListener('click', makeRed);


function makeBlack() {

        trafficLightEl.style.background = ('black');
        trafficLightEl.removeEventListener('click', makeBlack);
        trafficLightEl.addEventListener('click', makeGreen);
        trafficLightE2.removeEventListener('click', makeBlack);
        trafficLightE2.addEventListener('click', makeYellow);
        trafficLightE3.removeEventListener('click', makeBlack);
        trafficLightE3.addEventListener('click', makeRed);
    }
    
trafficLightEl.addEventListener('click', makeBlack);
trafficLightE2.addEventListener('click', makeBlack);
trafficLightE3.addEventListener('click', makeBlack);
