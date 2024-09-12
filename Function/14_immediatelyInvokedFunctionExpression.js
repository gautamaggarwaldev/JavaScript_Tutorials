(function() {
    var x = 23;
    console.log(x*x);
})();

(function(x) { //iife
    console.log(x*x);
})(100);