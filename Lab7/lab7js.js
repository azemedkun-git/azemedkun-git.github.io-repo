"use strict";
window.onload = function() {

    // put all of your code here
    function myFunctionTest(expected, found) {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

    function sumFunc(ar) {
        const d = ar.reduce(function (prevValue, elem, i, array) {
            return prevValue + elem;
        });
        return d;
    }

    console.log("Expected output of sumFunc([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, sumFunc([1, 2, 3, 4])));

    function multiply(ar) {
        const d = ar.reduce(function (prevValue, elem, i, array) {
            return prevValue * elem;
        });
        return d;
    }

    console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, multiply([1, 2, 3, 4])));
}