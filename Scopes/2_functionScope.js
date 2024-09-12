function fun() {
    let x = 10; // scope of x is within the function
    console.log(x);
}

function run() {
    for(let i=0;i<x;i++) {} //throws error
}

fun();
run();

console.log(x);//throws error