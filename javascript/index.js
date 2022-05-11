const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // import {Chronometer} from './chronometer'
  //Chronometer.computeTwoDigitNumber(`${}`)
}

function printMinutes() {
  minDecElement.innerHTML = Chronometer.computeTwoDigitNumber(Chronometer.getMinutes('minDec')) 
  minUniElement.innerHTML = Chronometer.computeTwoDigitNumber(Chronometer.getMinutes('minUni'))  
  // import {Chronometer} from './chronometer'
  //Chronometer.getMinutes(`${minDecElement}`)
  //Chronometer.getMinutes(`${minUniElement}`)
}

function printSeconds() {
  secDecElement = Chronometer.computeTwoDigitNumber(Chronometer.getSeconds('secDec'))
  secUniElement = Chronometer.computeTwoDigitNumber(Chronometer.getSeconds('secUni'))
   // import {Chronometer} from './chronometer'
  //const countSeconds = Chronometer.getSeconds(`${secDecElement}`) + Chronometer.getSeconds(${secUniElement}`))
  //return countSeconds
}

// ==> BONUS
function printMilliseconds() {
  //....
}

function printSplit() {
  // import {Chronometer} from './chronometer'
  //Chronometer.computeTwoDigitNumber(${splitsElement})
}

function clearSplits() {
   // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML =  "STOP";
  btnLeftElement.className =  "btn stop";
}

function setSplitBtn() {
  btnRightElement.innerHTML =  "SPLIT";
  btnRightElement.className =  "btn split";
}

function setStartBtn() {
  btnLeftElement.innerHTML =  "START";
  btnLeftElement.className =  "btn start";
}

function setResetBtn() {
  btnRightElement.innerHTML =  "RESET";
  btnRightElement.className =  "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  Chronometer.start(callback)
  printMinutes() 
  printSeconds()
if (btnLeftElement.innerHTML === "START") {
  setStopBtn()
  setSplitBtn()
} else {
  setStartBtn()
  setResetBtn()
  
}
});
