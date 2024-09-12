function mannualException() {
    const randNumber = Math.floor(Math.random()*100);
    console.log(randNumber);
    if(randNumber%2==0) return randNumber;
    else throw "Number is odd";
}

mannualException();