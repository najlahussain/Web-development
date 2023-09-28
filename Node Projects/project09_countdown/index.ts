function startCountdown() {
    const targetTime = new Date().getTime() + 10000; // 10 seconds from now
    // The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval()
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
    //   console.log('current time', currentTime);
      const remainingTime = targetTime - currentTime;
    //   console.log('target time', remainingTime);
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        console.log("Countdown complete!");
      } else {
        const seconds = Math.ceil(remainingTime / 1000);
        console.clear();
        console.log(`Countdown: ${seconds} seconds remaining`);
      }
    }, 1000);
  }
  
  startCountdown();
  