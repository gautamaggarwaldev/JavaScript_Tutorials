const obj = {
    firstName: "Gautam",
    greet: function(msg, prompt) {
        console.log("hello, my name is", this.firstName, msg, prompt);
    }
}

const newObj = {
    firstName: "Garima"
}

obj.greet.apply(newObj, ["Namste ji", "Sab badiya ?"]); //apply()
