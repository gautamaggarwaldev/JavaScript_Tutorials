var currentStudent = "gautam";
console.log("start");
console.log(friend); // ReferenceError: friend is not defined
function updateStudentInfo() {
    var currentStudentLocal = "garima";
    friend = "jhon";
    console.log(`The friend of ${currentStudentLocal} is ${friend}`);
}