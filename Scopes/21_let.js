function fun(x) {
    let ans;
    if(x%2==0) {
        ans = 2*x;
    }
    else {
        ans = 3*x;
    }
    return ans;
}

console.log(fun(6));
console.log(fun(7));