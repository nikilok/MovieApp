export default class Menu {
    constructor(element) {
        this.eventHandler(element);
    }
    eventHandler(element) {
        this.menu = document.querySelector(element);
        const menuLink = this.menu.getAttribute('data-menu-link');
		this.menuContent = document.getElementById(menuLink);
        
        this.menu.addEventListener("click", (event) => {
			event.stopPropagation();
            const visible = this.menuContent.getAttribute("data-visible");
            
            if (visible === 'false') {
                this.showMenu();
            } else {
                this.hideMenu();
            }
		});

		window.addEventListener("click", () => {
			if (this.menuOpen) 
				this.hideMenu();
		});
    }
    showMenu() {
		this.menuOpen = true;
        this.menuContent.setAttribute("style", this.getPosition());
        this.menuContent.setAttribute("data-visible", "true");
    }
    hideMenu() {
		this.menuOpen = false;
        this.menuContent.setAttribute("style", "display:none");
        this.menuContent.setAttribute("data-visible", "false");
    }
    
    getPosition() {
        const menuTop = this.menu.offsetTop;
        const menuLeft = this.menu.offsetLeft;
        const windowWidth = window.innerWidth;

        return `display:block;
        top: ${menuTop + 39}px;
        right: ${windowWidth - menuLeft - 20}px`;
    }
}