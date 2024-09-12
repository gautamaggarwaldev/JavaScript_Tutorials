function fetchNextElement(arr) {
    let idx = 0;
    function next() {
        if(idx >= arr.length) {
            return {value: undefined, done: true};
        }
        const newElement = arr[idx];
        idx++;
        return {value: newElement, done: false};    
    }
    return {next};
}

let arr = [1,2,3,4,5,6,7,8,9];

const ans = fetchNextElement(arr);

console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());