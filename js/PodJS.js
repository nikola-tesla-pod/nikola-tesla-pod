(function () {
"use strict";
// ~~~~~~~1 - Codeup Bonus~~~~~~~~

// function randomIntBetween(min,max){
//     var intArray = [];
//     if(min < 0) {
//         if(max < 0) {
//             for(var i = min; i <= max; i++){
//                 intArray.push(i);
//                 console.log(i);
//                 if(i === max){
//                     break;
//                 }
//             }
//         } else {
//             for (var i = min; i < 0; i++) {
//                 intArray.push(i);
//                 console.log(i);
//                 if (i === 0) {
//                     break;
//                 }
//             }
//
//
//             var totalLength = max + Math.abs(min);
//
//             for (var i = 1; (totalLength + 1) > intArray.length; i++) {
//                 intArray.push(i);
//                 console.log(i);
//                 if ((totalLength) === intArray.length) {
//                     break;
//                 }
//             }
//         }
//     } else {
//         for (var i = min; max > intArray.length; i++) {
//             intArray.push(i);
//             console.log(i);
//             if (intArray.length === max - 1) {
//                 break;
//             }
//         }
//     }
//     var randomInt = intArray[Math.floor(Math.random() * intArray.length)];
//     return randomInt;
// }
//
// console.log(randomIntBetween(2, 12));
// console.log("<br><br>");
// console.log(randomIntBetween(-10, 21));
// console.log("<br><br>");
// console.log(randomIntBetween(-8, -5));

// ~~~~~~~~~~ 2 - Hard Edabit~~~~~~~~~~


    // C*ns*r*d Str*ngs
    // Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
    //
    // Given a censored string and a string of the censored vowels, return the original uncensored string.
    //
    //     Example
    // uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"
    //
    // uncensor("abcd", "") ➞ "abcd"
    //
    // uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"
    // Notes
    // The vowels are given in the correct order.
    //     The number of vowels will match the number of * characters in the censored string.

//
// function uncensor(str, vowels){
//     var empStr = "";
//     var vowelarray = vowels.split('');
//     for(var i = 0; i < str.length; i++) {
//         var asterisk = str.charAt(i);
//         if(asterisk === '*') {
//             empStr += vowelarray.shift();
//         } else {
//             empStr += asterisk;
//         }
//     }
//     return empStr;
// }
//
//
//     console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
//
//     console.log(uncensor("abcd", ""));
//
//     console.log(uncensor("*PP*RC*S*", "UEAE"));


    // ~~~~~~~~3 - Very Hard Edabit~~~~~~~

//     Difference Cipher
//     It's time to send and receive secret messages.
//
//     Create a single function that takes a string or an array and returns a coded or decoded message.
//
//         The first letter of the string, or the first element of the array represents the Character Code of that letter. The next elements are the differences between the characters: e.g. A +3 --> C or z -1 --> y.
//
//         Examples
//     difCiph("Hello") ➞ [72, 29, 7, 0, 3]
// // H = 72, the difference between the H and e is 29 (upper- and lowercase).
// // The difference between the two l's is obviously 0.
//
//     difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) ➞ "Hi there!"
//
//     difCiph("Sunshine") ➞ [83, 34, -7, 5, -11, 1, 5, -9]
//     Notes
//     The input of the function will always be a string or an array with numbers.


    function difCiph(input) {
    if(typeof input === "string"){
        var secretArr = [];
        secretArr.push(input.charCodeAt(0));
        for(var i = 1; i < input.length; i++){
            var subtract = input.charCodeAt(i) - input.charCodeAt(i - 1);
            secretArr.push(subtract);
        }
        return secretArr;
    } else {
        var secretStr = "";
        for(var i = 0; i < input.length; i++){
            secretStr.concat(input.fromCharCode(i));
        }
        return secretStr;
    }
    }

    console.log(difCiph("Sunshine"));
    // console.log(difCiph([72, 33, -73, 84, -12, -3, 13, -13, -68]));
    console.log(difCiph("Hello"));
})();


