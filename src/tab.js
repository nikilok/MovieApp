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
            tab.addEventListener("click", function () {
                const selectedTab = this.selectedTab;
                const allTabs = this.allTabs;

                allTabs.forEach(tab => {
                    tab.classList.remove('active');
                    this.hideTab(tab);
                });
                this.showTab(selectedTab);
                selectedTab.classList.add('active');
                updateDomWidthLeft(this.selectedTab, this.tail);

            }.bind({
                allTabs: tabs,
                selectedTab: tab,
                tail: tabtail,
                showTab: this.showTab,
                hideTab: this.hideTab
            }));
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