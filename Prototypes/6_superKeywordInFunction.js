function Events(DateOfEvent) {
    this.DateOfEvent = DateOfEvent;
}

Events.prototype.BookEvent = function() {
    console.log("Event book !");
}

function Movie(movieName, movieDate) {
    Events.call(this, movieDate);
    this.movieName = movieName;
}

m = new Movie("Deadpool", "2026-07-25");
console.log(m);