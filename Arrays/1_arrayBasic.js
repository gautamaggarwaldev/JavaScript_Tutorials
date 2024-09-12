let arr1 = [];
let arr2 = [74,-96,true,null,-0,"garima",false];

console.log(arr1, arr2);

console.log(typeof arr1); //object
console.log(typeof arr2);
console.log(arr2[3]);

arr2[3] = 897;
console.log(arr2);

console.log(arr2[10]); //undefined

arr2[15] = "js";
console.log(arr2); 

let arr3 = new Array(10,20,30,40,50);
console.log(arr3);


let arr4 = new Array(10); // filled with undefined
console.log(arr4); // [ <10 empty items> ]

let arr5 = new Array(5).fill(-0); //filled with -0
console.log(arr5); 