const pr = new Promise(function exce(res, rej) {
    console.log("Executor callback trigerred by Promise constructor");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 2 === 0) { //even
            res(randomNumber); // status fullfilled
        } 
        else { //odd
            rej(randomNumber); // status rejeccted      
        }
    }, 5000);
});

console.log("Created the Promise Object");
console.log(pr);