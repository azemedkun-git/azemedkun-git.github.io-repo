//Question 1
function reverseArray(element) {
    const arr=[];
    for(let i=element.length-1; i>=0; i--){
       arr.push([i]);
    }
    return arr;
}
console.log(reverseArray(['d', 'c', 'b', 'a']));

//Question 2a- Array to list
function list(arr) {
    let node, temp;
    for(let i=arr.length-1; i>=0; i--){
        if(!node){
            node=new createlist(arr[i]);
        }
        else{
            temp=new createlist((arr[i]));
            temp.next = node;
            node=temp;
        }
    }
    function createlist(val){
        this.val = val;
        this.next=null;
    }
    return node;
}
console.log(list([1, 2, 3, 4]));


//Question 3
function reverseArrayInPlace(arr) {
    for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
}
console.log(reverseArrayInPlace(['d', 'c', 'b', 'a']));

function deepEqual(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }

    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));//Not working for this one as it has nested objects.
//therefore the solution is to use the simplest JSON.stringify or _.isEqual(value, other). It does a deep evaluation
//Solution
function deepEqualDeep(obj1, obj2){
    const bool =JSON.stringify(obj1)===JSON.stringify(obj2);
    return bool;
}
//using arrow=>let deeepequal = (a, b)=>JSON.stringify(a)===JSON.stringify(b);
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));



