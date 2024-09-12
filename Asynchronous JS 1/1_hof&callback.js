// let arr = [1,2,3,4,5,6];
// arr.map(function f() {});   map --> hof and f ---> callback


const arr = [1,2,3,4,5];

function myMap(arr, fn) { //myMap ----> hoF
    let result = [];
    for(let i=0;i<arr.length;i++) {
        result.push(fn(arr[i],i));
    }
    return result;
}

console.log(myMap(arr, function g(ele) { // g---> callbak
    return ele**2;
}));