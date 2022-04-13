//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
    constructor(title, genre, language, rating) {
        this.title = title;
        this.genre = genre;
        this.language = language;
        this.rating = rating;
    }
    play() {
        console.log('Starting the show.')
    };
    pause() {
        console.log('Paused')
    };
    home() {
        console.log('Redirecting to home...')
    }
}
