var teacher = "garima";
function fun() {
    var teacher = "gautam";
    content = "JS"; //autoglobal
    console.log("wow",content,teacher);
}
console.log(teacher);
fun();
console.log(content);