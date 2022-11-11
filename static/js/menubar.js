const clock = document.getElementById('clock');


function setTime() {
    const d = new Date();
    clock.textContent = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

setTime();
setInterval(setTime, 1000 * 60);