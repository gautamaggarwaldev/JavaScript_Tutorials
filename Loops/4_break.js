let i = 1;
let j = 100;

while(j<200) {
    while(i<=20) {
        if(i%8 == 0) {
            break;
        }
        console.log("i = ",i);
        i++;
    }
    console.log("j = ", j);
    j++;
}