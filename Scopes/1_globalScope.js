let x = 5; //global scope

function fun() {
  console.log(x);
}

function run() {
    for(let i=0;i<=x;i++){}
}

fun();
run();

console.log("the value of x is",x);
