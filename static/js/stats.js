const stateClasses =  {
    "operational": 'green',
    "paused": 'orange',
    "printing": 'blinkingSlow-blue',
    "cancelling": 'red',
    "pausing": 'blinking-orange',
    "error": 'blinking-red',
    "ready": 'green',
    "closedOrError": 'blinking-red'
}


function processStatus(status) {
    const element = document.querySelector('span#status' + status.name);
    const statusIconElement = document.querySelector('div#statusIcon' + status.name);

    let flag = 'unknown';

    Object.keys(status.state.flags).forEach(flagName => {
        if (status.state.flags[flagName])
            flag = flagName;
    });

    statusIconElement.classList.add(...stateClasses[flag].split('-'));
    element.innerHTML = flag;
}

function setTemperatures(status) {
    const bedTempElement = document.querySelector('span#bedtemp' + status.name);
    const hotendTempElement = document.querySelector('span#hotendtemp' + status.name);

    bedTempElement.innerHTML = `${status.temperature.bed.actual} °C / ${status.temperature.bed.target} °C`;
    hotendTempElement.innerHTML = `${status.temperature.tool0.actual} °C / ${status.temperature.tool0.target} °C`
}

function setProgressBar(status) {
    const progress = Math.round(Number(status.extended.result.status.virtual_sdcard.progress) * 100);
    document.querySelector('#progress' + status.name).style.width = `${progress}%`;
    document.querySelector('#progress' + status.name + "Percentage").innerHTML = `${progress}%`;
}

function updatePrinters() {
    fetch('https://stats.fucklegal.com:3678/')
    .then(response => response.json())
    .then(printerStatuses => {

        printerStatuses.forEach(status => {
            processStatus(status);
            setTemperatures(status);
            setProgressBar(status);
        })
    });

    setTimeout(updatePrinters, 5000);
}

updatePrinters();


