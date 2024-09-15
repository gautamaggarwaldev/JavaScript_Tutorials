let str1 = "garima"
let str2 = "watson"

console.dir(str1+str2);
console.dir(str1);
console.dir(str2);

console.dir(str1 + 52);
console.dir(str1 + 0);//'garima0'
console.dir(str1 + -0);//'garima0'

console.dir(str1 + NaN);
console.dir(str1 + undefined);
console.dir(str1 + {name: "gautam"}); //'garima[object Object]'
