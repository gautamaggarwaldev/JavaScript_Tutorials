"use strict"; // it stops the formation of auto global
var teacher = "garima";
function fun() {
    var teacher = "gautam";
    content = "JS";
    console.log("wow",content,teacher);
}
console.log(teacher);
//console.log(content); throws error
fun();