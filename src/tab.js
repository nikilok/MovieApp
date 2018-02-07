import { updateDomWidthLeft, showElement } from './common-utils';

export default class Tabs {
    constructor(element) {
        this.eventHandler(element);
    }
    eventHandler(element) {
        const tabs = document.querySelectorAll(`${element} .tablinks`);
        const activetab = document.querySelector(`${element} .active`);
        const tabtail = document.querySelector(`${element} .tabselector`);

        updateDomWidthLeft(activetab, tabtail);
        this.showTab(activetab);

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                    this.hideTab(tab);
                });
                this.showTab(tab);
                tab.classList.add('active');
                updateDomWidthLeft(tab, tabtail);
            });
        })
    }

    showTab(activeTab) {
        const activeTabID = activeTab.getAttribute('data-id');
        const element = document.getElementById(activeTabID);
        element.style.display = "block";
    }

    hideTab(activeTab) {
        const activeTabID = activeTab.getAttribute('data-id');
        const element = document.getElementById(activeTabID);
        element.style.display = "none";
    }

}