class Events {
    constructor(dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }

    bookEvent() {
        console.log("Event book !");
    }
}

class Movie extends Events {
    constructor(movieName, movieDate) {
        super(movieDate);
        this.movieName = movieName;
    }
}

let dp = new Movie("Deadpool", "2026-07-25");

console.log(dp);