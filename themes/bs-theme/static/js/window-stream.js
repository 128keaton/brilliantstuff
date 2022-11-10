const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title');

document.querySelector('#title').innerHTML =title;


