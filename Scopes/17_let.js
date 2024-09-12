function fun() {
    console.log(x);// this is a temporal dead zone(TDZ) ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x);
}

fun();