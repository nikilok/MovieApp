export default class MultiLineWrap {
    constructor(element) {
        this.eventHandler(element);
    }
    eventHandler(element) {
        this.readMore = document.querySelector(element);
        this.readMore.className += ' readmore';

        this.readMore.addEventListener("click", () => {
            const isExpanded = this.readMore.className.includes('readmore');
            if (isExpanded) {
                this.readMore.className = this.readMore.className.replace(' readmore', '');
            } else {
                this.readMore.className += ' readmore';
            }
        });
    }
}