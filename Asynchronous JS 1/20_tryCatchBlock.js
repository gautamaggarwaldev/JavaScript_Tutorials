function mannualException() {
    const randNumber = Math.floor(Math.random()*100);
    if(randNumber%2==0) return randNumber;
    else throw "Number is odd";
}

function caller() {
    try {
        console.log("This piece of code may be risky for your device");
        const response = mannualException();
        console.log("Code is fine, RELAX!", response);
    } catch(exception) {
        console.log("You are in catch block");
        console.log("Code is risky!!");
    }
}

caller();