const obj = {
    firstName: "Gautam",
    greet: function(msg, prompt) {
        console.log("hello, my name is", this.firstName, msg, prompt);
    }
}

const newObj = {
    firstName: "Garima"
}


f = obj.greet.bind(newObj);
f("hello", "hi");

obj.greet();