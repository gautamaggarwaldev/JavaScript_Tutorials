var teacher = "garima";
function fun() {
    teacher = "gautam";
    content = "JS";
    console.log("wow",content,teacher);
}
console.log(teacher); //garima
console.log(content); //it throws error `content` is used as RHS so auto global is not formed
fun();