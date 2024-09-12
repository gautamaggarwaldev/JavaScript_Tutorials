const myfun = function fun(x) { //named function expression
    console.log("running...", x);
}

const myfun1 = function(x) { //anonymous function expression
    console.log("running...", x);
}

const myfun2 = (x) => { //arrow function expression
    console.log("running...", x);
} 

(function gun(x) { //IIFE -> immediately invoked function expression
    console.log("running...", x);
})(60);

myfun(90);
myfun1(80);
myfun2(70);


