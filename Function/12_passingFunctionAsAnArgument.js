function somefun() {
    return function x() {
        return 10;
    }
}

function anotherfun(f1) {
    f1();
    console.log("calling f1...");
}

function hello() {
    console.log("hello");
}

anotherfun(hello);
// anotherfun(hello()); ---> error