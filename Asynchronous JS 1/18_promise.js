const pr = new Promise((res,rej) => {
    setTimeout(()=>{
        console.log("Timer of pr is done!");
        res(1500); // status --> fullfilment and value --> 1500
    },5000);
});

const pr1 =  pr.then(function f(){
    return "garima";
});
