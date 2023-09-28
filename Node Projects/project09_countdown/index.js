"use strict";
function startCountdown() {
    const targetTime = new Date().getTime() + 10000; // 10 seconds from now
    const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        console.log('current time', currentTime);
        const remainingTime = targetTime - currentTime;
        console.log('target time', remainingTime);
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            console.log("Countdown complete!");
        }
        else {
            const seconds = Math.ceil(remainingTime / 1000);
            // console.clear();
            console.log(`Countdown: ${seconds} seconds remaining`);
        }
    }, 1000);
}
startCountdown();
