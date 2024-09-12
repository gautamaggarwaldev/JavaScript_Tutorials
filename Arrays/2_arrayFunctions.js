let arr = [1,2,3,4,5];

console.log(arr.length);
console.log(arr);

arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.shift();
console.log(arr);

arr.reverse();
console.log(arr);

console.log(arr.indexOf(1)); //give the index of element 
console.log(arr.indexOf(102)); // -1



let arr1 = [1,2,3,4,5];
console.log(arr1);

arr1.push(6,7);
console.log(arr1);

arr1.unshift(8);
console.log(arr1);

let x = arr.shift();
console.log(arr1);
console.log(x);


let arr2 = [1,2,3,4,5];
let y = arr2.shift();
console.log(y);



let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = a1.concat(a2);
console.log(a1,a2,a3);

let s = a3.join("");
console.log(s);

let s1 = a3.join("~");
console.log(s1);

let array = [1,2,3,4,5,6,7,8,9];
console.log(array.slice(2,7)); // "starting" index (2) se lekr "ending-1" index (7-1)

array.splice(5, 0, 100,200,300); // array.splice(index, 0 or (1,2,3..), element)   0 means not delete the existing element 
console.log(array);                                             // 1,2,3..  means delete the existing number of element