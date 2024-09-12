function* myGenerator() { // this generator function returns the generator object which contain iterable capabilities
    console.log("inside generator");
    yield 100; 
    yield 65;
    console.log("line 5");
    yield -1;
    console.log("line 7");
    yield 84;
    console.log("line 9");
}

const i = myGenerator();
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