let obj = {name:"garima", age:27, salary:290000};
console.log(obj);

let emp = new Object();
emp.id = 102;
emp.name = "gautam";
emp.salary = 741237;
console.log(emp);

function Emp(i,s,n) {
    this.id = i;
    this.salary = s;
    this.name = n;
}

const e = new Emp(102,741852,"hjk");
console.log(e);

console.log(emp.id);
console.log(emp['name']);

emp.cast = "aggarwal";

emp['id'] = 1003;
console.log(emp);


delete emp.id;
console.log(emp);