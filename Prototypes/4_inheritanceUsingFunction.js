function Events(doe) {
    this.doe = DateOfEvent;
}

Events.prototype.bookEvent = function() {
    console.log("Booking Event!");
}

console.log(Events.prototype);
console.log(Events.prototype.__proto__);

function Movie(name) {
    this.name = name;
}

console.log(Movie.prototype);
console.log(Movie.prototype.__proto__);

// Movie.prototype.__proto__ = Events.prototype; //IMP
Movie.prototype = Object.create(Events.prototype); //same as line 19

console.log(Movie.prototype);
console.log(Movie.prototype.__proto__);

m = new Movie("Endgame");
m.bookEvent();

