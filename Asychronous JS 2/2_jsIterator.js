let arr = [1,2,3,4,5,6];

const it = arr[Symbol.iterator]();
console.log(it); //Object [Array Iterator] {}

console.log(it.next()); //{ value: 1, done: false }
console.log(it.next()); //{ value: 2, done: false }
console.log(it.next()); //{ value: 3, done: false }
console.log(it.next()); //{ value: 4, done: false }
console.log(it.next()); //{ value: 5, done: false }
console.log(it.next()); //{ value: 6, done: false }
console.log(it.next()); //{ value: undefined, done: true }