function reverseArray(element) {
    const arr=[];
    for(let i=element.length-1; i>=0; i--){
       arr.push([i]);
    }
    return arr;
}
console.log(reverseArray(['d', 'c', 'b', 'a']));

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
    const obj1key = Object.keys(obj1);
    const obj2key = Object.keys(obj2);

    if(obj1key.length!==obj2key.length){
        return false;
    }
    for(let objkey of obj1key){
        if(obj1key[objkey]!==obj2key[objkey]){
            return false;
        }
    }
    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));