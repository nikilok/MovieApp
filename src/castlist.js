import { updateDom, loadPage } from './common-utils';

export default class CastList {
    constructor(element, actors) {
        this.renderActorsUI(element, actors);
    }
    renderActorsUI(element, actors) {
        const template = `
        ${actors.map((actor) => `
        <div class='actor' data-actor="${actor}">
            <div class='thumbnail'></div>
            <div class='info'>
              <div class='name'>${actor}</div>
              <div class='nick'>nick name</div>
            </div>
          </div>
        `).join('')}`;
		updateDom(element, template);
		this.eventHandlers(element);	
	}
	
	eventHandlers(element) {
		const actorsEle = document.querySelectorAll(`${element} .actor`);
		actorsEle.forEach(actor => {
			const actorName = actor.getAttribute('data-actor');
			actor.addEventListener("click", () => {
				loadPage(`/?actor=${actorName}`, '#interactivepage');
			});
		})
	}
}