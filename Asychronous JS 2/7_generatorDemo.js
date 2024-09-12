function* gen() {
    console.log("inside gen");
    const x = yield 10;
    const y = x + 20;
    yield y;
}

let it = gen();

const x = it.next();
const y = it.next(x.value); 
