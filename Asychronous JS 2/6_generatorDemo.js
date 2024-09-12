function* gen() {
    console.log("inside gen");
    const x = yield 10;
    const y = x + 20;
    yield y;
}

let it = gen();

console.log(it.next()); //{ value: 10, done: false }
console.log(it.next(50)); //{ value: 70, done: false }
console.log(it.next()); //{ value: undefined, done: true }

