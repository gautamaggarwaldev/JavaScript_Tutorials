// both the `x` variable in `global` and `block` scope are same because `var` is work in `global` and '`function' scope only.

var x = 10; //global
if(true) {
    var x = 20; //block
    var y = 30;
    console.log(x,y);
}
console.log(x,y);