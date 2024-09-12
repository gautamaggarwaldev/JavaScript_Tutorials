let obj = {
    x: 10,
    y:20,
    fn : function() {
        const arrow = () => {
            console.log(this.x, this.y);
        }
        arrow();
    }
}

console.log(obj.fn());