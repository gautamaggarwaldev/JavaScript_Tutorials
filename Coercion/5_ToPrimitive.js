let x = 10;
let y = {b: 10};

console.log(x-y); //NaN

y.toString = function() {return 999;};

console.log(x-y); //y.valueOf() ---> y ---> y.toString() ---> '999' ---> 10 - '999' = 10 - 999 = -989

y.valueOf = function() {return 89;}

console.log(x-y);//y.valueOf() ---> '89' ---> 10 - '89' = 10 - 89 = -79