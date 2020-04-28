function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function sumFunc(ar) {
    const d = ar.reduce(function(prevValue, elem, i, array){
        return prevValue + elem;
    });
    return d;
}

console.log("Expected output of sumFunc([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, sumFunc([1, 2, 3, 4])));

function multiply(ar) {
    const d = ar.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
    return d;
}

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, multiply([1, 2, 3, 4])));

function findLongWord(word) {
    let l=0;
    const c=word.reduce(function (first, second) {
        l = first.length > second.length? first.length:second.length;
    });
    return l ;
}
console.log("Expected output of findLongWord(words) is  4 and  " + myFunctionTest( 4, findLongWord(['abe', 'zell'])));

function reverse(word){
    const arr=word.split('');
    const rev = arr.reduce(function (c1,c2) {
        return (c2 + c1);
    });
    return rev;
}
console.log("Expected output of reverse('word') is drow and  " + myFunctionTest('drow', reverse('word')));
function filterLongWord(words, num){
    const ar=[];
    const c = words.filter(function(elem, i, array){
        if(elem.length>num){
            ar.push(elem)
        }
    });
  return ar;
}
console.log("Expected output of filterLongWords(['what', 'who', 'whom'], 3) is [\"what\", \"whom\"] and  " + myFunctionTest(['what','whom'], filterLongWord(['what', 'who', 'whom'], 3)));
