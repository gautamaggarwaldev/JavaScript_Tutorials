const obj = {
    firstName: "Gautam",
    greet: function(msg, prompt) {
        console.log("hello, my name is", this.firstName, msg, prompt);
    }
}

const newObj = {
    firstName: "Garima"
}

obj.greet("Namste ji", "Sab badiya ?");
obj.greet.call(newObj, "Namste ji", "Sab badiya ?");
obj.greet.call(null, "Namste ji", "Sab badiya ?");
obj.greet.call();