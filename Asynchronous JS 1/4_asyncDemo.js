function createTimer(timer, timerId) {
    console.log("Creating a new timer with id", timerId);
    setTimeout(() => {
        console.log(`Timer with id ${timerId} is done`);
    },timer);
    console.log("Successfully created a timer with id", timerId);
}

console.log("Starting a code...");
createTimer(2000,1);
createTimer(0,2);
console.log("Starting the for loop...");
for(let i=0; i<10000000000; i++) {  }
console.log("Loop is end !");
console.log("Last line of code");