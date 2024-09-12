var x = 10; // global scope
function fun() {
    var x = 20; // fun scope
    console.log(x);
}
var x = 30; // same x as above in global scope
fun();
console.log(x);


var z = 10;
for(var z = 1; z<5; z++) console.log(z);
console.log("value of z after loop", z);