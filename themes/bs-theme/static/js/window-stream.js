const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title');
let icon = urlParams.get('icon');


if (!icon) {
    const icons = [
        'big-printer.ico',
        'pens.ico',
        'printer.png',
        'replacethispart.ico',
        'tracer.ico'
    ];


    icon = icons[Math.floor(Math.random() * icons.length)];
}

document.querySelector('#icon').src = '/img/window-icons/' + icon;
document.querySelector('#title').innerHTML = title;


