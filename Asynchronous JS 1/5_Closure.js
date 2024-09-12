function fun(c,d) {
    let m = 10;
    function gun() {
        let x = 99;
        console.log("c+m =", c+m);
    }
    return gun;
}

const g = fun(8,15);

console.log(g);
g();

console.dir(g);