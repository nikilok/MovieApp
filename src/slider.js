export default class Slider {
    constructor(selector) {
        this.eventHandler(selector);
    }
    eventHandler(selector) {
        const images = document.querySelectorAll(selector);
        const slider = document.querySelector('#slider');
        const body = document.querySelector('body');

        images.forEach(function(img) {
            img.addEventListener("click", function () {
                if (img.className.includes('active')) {
                    slider.setAttribute("style", "");
                    body.setAttribute("style", "");
                    img.className = 'photo';
                } else {
                    slider.setAttribute("style", "overflow-x: initial");
                    body.setAttribute("style", "overflow: hidden; position: fixed;");
                    img.className = 'photo active';
                }
            });
        });
    }
}