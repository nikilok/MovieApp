import { setTimeout } from "timers";


export function updateDom(eleID, value, showElement = false) {
    const element = document.querySelector(eleID);
    if (showElement) {
        element.style.visibility = "visible";
    }
    element.innerHTML = value;
}

export function updateDomWidthLeft(element, target) {
    const width = element.offsetWidth;
    const left = element.offsetLeft;
    target.style.width = `${width}px`;
    target.style.left = `${left}px`;
}

export function updateImgSrc(selector, srcUrl) {
    document.querySelectorAll(selector).forEach(img => {
        img.style.backgroundImage = `url(${srcUrl})`;
    });
}

export function getQueryByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp("[?&]" + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function processAjaxData(urlPath) {
    window.history.pushState({}, null, urlPath);
}
function browserPopState(element) {
    window.addEventListener('popstate', (event) => {
        // The popstate event is fired each time when the current history entry changes.
        element.className = element.className.replace(" expand", "");
    }, false);
}


export function loadPage(url, element) {
    const ele = document.querySelector(element);
    const pageLoader = document.querySelector(`${element} #contentarea`);

    pageLoader.setAttribute('data', url);
    processAjaxData(url);
    browserPopState(ele);

    ele.setAttribute('style', 'display:block');

    /* Hacky Solution using setTimeout, because haven't figured out
    watching the object page load state before causing the expansion animation. */
    setTimeout(() => {
        ele.className += ' expand';
    }, 100);
}