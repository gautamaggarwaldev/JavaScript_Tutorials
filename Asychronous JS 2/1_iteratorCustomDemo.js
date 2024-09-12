function fetchNextElement(arr) {
    let idx = 0;
    function next() {
        if(idx >= arr.length) {
            return undefined;
        }
        const newElement = arr[idx];
        idx++;
        return newElement;    
    }
    return next;
}

let arr = [1,2,3,4,5,6,7,8,9];

const ans = fetchNextElement(arr);

console.log(ans());
console.log(ans());
for(let i=0; i<1000000000; i++) {}
console.log(ans());
console.log(ans());