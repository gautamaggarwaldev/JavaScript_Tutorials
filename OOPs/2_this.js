let obj1 = {
    x: 10,
    y: 20,
    fn: function () {
        console.log(this.x, this.y);
    }
}


let obj = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function () {
            console.log(this.x, this.y);
        }
    }
}

console.log(obj1.fn());
console.log(obj.z.fn());