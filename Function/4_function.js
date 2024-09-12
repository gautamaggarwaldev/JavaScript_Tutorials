function isEvenOdd(x) {
    if(x%2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

let ans = isEvenOdd(8);
console.log(ans);