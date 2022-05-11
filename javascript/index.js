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
  const time = chronometer.split();
  /* const minutes = printMinutes();
  const seconds = printSeconds(); */
  minDecElement.innerHTML = time[0];
  minUniElement.innerHTML = time[1];
  secDecElement.innerHTML = time[3];
  secUniElement.innerHTML = time[4];
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  console.log({ minutes });

  return minutes;
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  console.log({ seconds });

  return seconds;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  console.log('Printing splits !');

  let timeStamps = document.createElement('li');
  timeStamps.innerHTML = `${minDecElement.innerText}${minUniElement.innerText}:${secDecElement.innerText}${secUniElement.innerText}`;

  splitsElement.append(timeStamps);
}

function clearSplits() {
  console.log('Clearing splits !');
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  console.log('setStopBtn');
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.classList.toggle('stop');
}

function setSplitBtn() {
  console.log('setSplitBtn');

  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  console.log('setStartBtn');
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  console.log('setResetBtn');

  btnRightElement.innerHTML = 'RESET';
}

function resetChrono() {
  console.log('Reset !');

  chronometer.reset();
  minDecElement.innerHTML = '0';
  minUniElement.innerHTML = '0';
  secDecElement.innerHTML = '0';
  secUniElement.innerHTML = '0';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    clearSplits();
    resetChrono();
  } else {
    printSplit();
  }
});