/*jshint esversion: 6 */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
function maxOfTwo(x, y){
    if(x>y){
        return x;
    }
    else if(y>x){
        return y;
    }
    else{
        return x;
    }
}
console.log("Expected output of max(20,10) is 20 and  " + myFunctionTest(20, maxOfTwo( 20, 10)));


function maxOfThree(one, two, three) {
    if (one >= two && one >= three) {
        return one;
    } else if (two >= one && two >= three) {
        return two;
    } else if (three >= one && three >= two) {
        return three;
    } else {
        return one;
    }
}
console.log("Expected output of max(20,10, 30) is 20 and  " + myFunctionTest(30, maxOfThree( 20, 10, 30)));

function isVowl(ch) {
    if(ch=="A" || ch=="a" || ch=="E" || ch=="e" || ch=="I"||ch=="i" || ch=="O"||ch=="o"||ch=="U"||ch=="u"){
        return true;
    }
    else {
        return false;
    }
}console.log("Expected output of isVowl(c) is false and  " + myFunctionTest(false, isVowl('c')));

function sum(arr){  //input sum([1, 2, 3, 4, 5]); output 15
    let add=0;
    for(let i=0; i<arr.length; i++){
        add=add + arr[i];
    }
    return add;
}
console.log("Expected output of sum([1, 2, 3, 4, 5]) is 15 and  " + myFunctionTest(15, sum([1, 2, 3, 4, 5])));

function  multiply(arr){ //input multiply([1, 4, 5]); output 20
    let prod=1;
    for(let i=0; i<arr.length; i++){
        prod*=arr[i];
    }
    return prod;
}
console.log("Expected output of multiply([1, 2, 3]) is 6 and  " + myFunctionTest(6, multiply([1, 2, 3])));
function reverse(word){ //reverse('words')  output: tuptuo
    let s="";
    for(let i=word.length-1; i>=0; i--){
        s = s + word.charAt(i); // Or s = s + word[i];
    }
    return s;
}
console.log("Expected output of reverse('word') is drow and  " + myFunctionTest('drow', reverse('word')));
function findLongestWord(words){ //findLongestWord(['abe', 'zell']) output 4
    let length=0;
    for(let i=0; i<words.length; i++){
        if(words[i].length > length){
            length=words[i].length;
        }
    }
    return length;
}
console.log("Expected output of findLongestWord(words) is  4 and  " + myFunctionTest( 4, findLongestWord(['abe', 'zell'])));
function filterLongWords(words, num){ //input filterLongWords(['what', 'who', 'whom'], 3) output ["what", "whom"]
    let arr=[];
    for(let i=0; i<words.length; i++){
        if(words[i].length > num){
            arr.push(words[i]);
        }
    }
    return arr;
}
console.log("Expected output of filterLongWords(words, num) is [\"what\", \"whom\"] and  " + myFunctionTest(['what','whom'], filterLongWords(['what', 'who', 'whom'], 3)));

document.write("This is output for modifying the example on map/filter/reduce</br>")
const a = [1,3,5,3,3];
const b=a.map(function (elem,i,array) {
    return elem * 10;
})
document.write(b.toString() + "<br/>");//output: 10,30,50,30,30

const c=a.filter(function (elem,i, array) {
    return elem===3;
})
document.write(c.toString() + "<br/>") //output 3,3,3
const prod=a.reduce(function (prev, elem, i, array) {
    return prev * elem;
})
document.write(prod.toString() + "<br/>");//output 135