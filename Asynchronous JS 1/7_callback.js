function h(x, fn) {
    console.log(x*x);
    fn(x*x);
    // fn();
}

// h(10, function() {
//     console.log("Callback function called...");
// })

h(10, exce);


function exce(n) {
    console.log("Squared value is", n);
}