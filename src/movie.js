import ajax from './rest/xhr';
import { updateDom, updateImgSrc } from './common-utils';

class Movie {
    constructor(response) {
        Object.assign(this, response);
        return this;
    }

    updateUI() {
        updateDom("#title", this.Title);
        updateDom("#maturity", this.Rated, true);
        updateDom("#otherinfo", `${this.Year} . ${this.Genre} . ${this.Runtime}`, true);
        updateDom("#plot", this.Plot);
        updateDom("#imdbscore", this.Ratings[0].Value);
        updateDom("#imdbsource", 'IMDb');
        updateDom("#rottenscore", this.Ratings[1].Value);
        updateDom("#rottensource", this.Ratings[1].Source);
        updateDom("#metascore", this.Ratings[2].Value);
        updateDom("#metasource", this.Ratings[2].Source);
        updateImgSrc("#poster", this.Poster);
    }
}

export default class MovieConfig {
    constructor(movieKey) {
        this.movieKey = movieKey;
        this.apiKey = '15863ff1';
        this.movieLink = `http://www.omdbapi.com/?i=${this.movieKey}&plot=full&apikey=${this.apiKey}`;
        return this.populateMovieInfo();
    }
    fetchMovieInfo() {
        return new Promise((resolve, reject) => {
            try {
                ajax('get', this.movieLink, (data) => {
                    resolve(JSON.parse(data));
                });
            }
            catch (exc) {
                reject(exc);
            }

        });
    }
    async populateMovieInfo() {
        let response = await this.fetchMovieInfo();
        let movie = new Movie(response);
        movie.updateUI();
        return movie;
    }
}