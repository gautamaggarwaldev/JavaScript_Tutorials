const pr = new Promise((res,rej) => {
    setTimeout(()=>{
        console.log("Timer of pr is done!");
        res(1500); // status --> fullfilment and value --> 1500
    },500);
});

const pr1 =  pr.then(function f(){console.log("executing f...")}, function g(){console.log("executing g...")});
// `pr1 is a brand new Promise`
const pr2 =  pr.then(function h(){console.log("executing h...")}, function i(){console.log("executing i...")});
// `pr2 is also a brand new Promise`
