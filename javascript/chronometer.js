class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime +=1
      if(callback) callback();
    }, 1000);
  }

  getMinutes() {
    const currentMinutes = Math.floor(this.currentTime/60)
    return currentMinutes
  }

  getSeconds() {
    const currentSeconds = Math.floor(this.currentTime%60)
    return currentSeconds
  }

  computeTwoDigitNumber(numbers) {
    if(numbers >= 10){
      return `${numbers}`
    } else {
      const displayNumbers = numbers.toString();
      return `0${numbers}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
    
  }

  reset() {
     this.currentTime = 0;
  
  }

  split() {
    const displayMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const displaySeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${displayMinutes}:${displaySeconds}`
}


}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
