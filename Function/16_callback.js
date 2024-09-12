function h(x, fn) { // h -> hof            fn() -> callback function
    console.log(x*x);
    fn(x*x);
}


// h(67, function() {
//     console.log("done with callback");
// })

h(67, exce)

function exce(n) {
    console.log("squared value is", n);
}

