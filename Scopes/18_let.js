function fun() {
    {
        console.log(x); // throws error TDZ
        let x;
        x = 5;
        console.log(x);
    }
}
console.log("start");
fun();