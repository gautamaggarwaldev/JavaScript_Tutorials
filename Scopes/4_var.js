/*
    var helps us to create `global` and `function` scope variable. We cannot make make `block` scope variable using var.
*/ 

var teacher = "govil ji";

function fun() {
    var teacher = "garima";
  console.log("hello",teacher);
}

function run() {
  var student = "gautam";
  console.log(student);
}

fun();
run();