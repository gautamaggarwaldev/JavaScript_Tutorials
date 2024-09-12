var teacher = "garima";
function fun() {
    teacher = "gautam";
    content = "JS";  // auto globals  content -> global scope 'content' is behave as LHS so auto global is formed.
    console.log("wow",content,teacher);
}
fun();
console.log(teacher);
console.log(content);