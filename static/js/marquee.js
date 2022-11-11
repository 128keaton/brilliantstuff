const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let text = urlParams.get('text');



if (!text || !text.length) {
    text = 'Visit us at our website!';
}

document.querySelector('marquee').innerHTML = text;


