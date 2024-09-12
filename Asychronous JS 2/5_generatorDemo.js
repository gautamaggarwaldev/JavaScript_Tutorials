function* gen(arr) {
    for(let i=0;i <arr.length; i++) {
        console.log("inside generator");
        yield arr[i];
    }
}

const i = gen([1,2,3,4,5,6]);

console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");