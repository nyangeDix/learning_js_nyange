function timingOut() {
    return document.querySelector('.timingOut').textContent += "\nHey I ate a sandwich today!";
}

//setTimeout
// var timeId = window.setTimeout(timingOut, 5000);

// window.clearTimeout(timeId);

//setInterval
// var timeId = window.setInterval(timingOut, 2000);
// window.clearInterval(timeId);

//animationRequest
function animationLoop() {

    timingOut();

    var time = requestAnimationFrame(animationLoop);
    time;
    cancelAnimationFrame(time);
}

animationLoop();