import MovieConfig from './movie';
import Tabs from './tab';
import Slider from './slider';
import CastList from './castlist';
import Menu from './menu';
import MultiLineWrap from './multiline';
import { getQueryByName, updateDom } from './common-utils';
import './index.scss';

class App {
    constructor() {
        this.pickView();
    }

    pickView() {
        const isActor = getQueryByName('actor');
        const actorView = document.querySelector('.actorView');
        const appView = document.querySelector('.appView');

        if (isActor) {
            updateDom('.actorView #name', isActor);
            actorView.setAttribute('style', 'display: block');
        } else {
            appView.setAttribute('style', 'display: block');
            this.InitApp();
        }
    }

    InitApp() {
        this.fetchMovieData();
        this.initTabs();
        this.initSliderEventHandlers();
        this.initShareMenu();
        this.initPlotReadMore();
    }

    fetchMovieData() {
        const movieKey = 'tt3896198'; //IMDb movie id (eg: tt3498820, tt0097523)
        let response = new MovieConfig(movieKey);
        response.then(data => {
            this.loadActorList(data.Actors.split(','));
        })
    }

    initTabs() {
        new Tabs('.tabbar .tabs');
    }
    initSliderEventHandlers() {
        new Slider('#poster');
    }
    loadActorList(actors) {
        new CastList('#actorList', actors);
    }
    initShareMenu() {
        new Menu('.topbar #sm1');
    }
    initPlotReadMore() {
        new MultiLineWrap('#plot');
    }

} new App();
