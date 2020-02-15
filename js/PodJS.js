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


    // function difCiph(input) {
    // if(typeof input === "string"){
    //     var secretArr = [];
    //     secretArr.push(input.charCodeAt(0));
    //     for(var i = 1; i < input.length; i++){
    //         var subtract = input.charCodeAt(i) - input.charCodeAt(i - 1);
    //         secretArr.push(subtract);
    //     }
    //     return secretArr;
    // } else {
    //     var add = input[0]
    //     var secretStr = (String.fromCharCode(add));
    //     for(var i = 1; i < input.length; i++){
    //         add = input[i] + add;
    //         secretStr = secretStr + (String.fromCharCode(add));
    //     }
    //     return secretStr;
    // }
    // }
    //
    // console.log(difCiph("Sunshine"));
    // console.log(difCiph([72, 33, -73, 84, -12, -3, 13, -13, -68]));
    // console.log(difCiph("Hello"));


    // ~~~~~~~4 - Hard Edabit ~~~~~~


    // Broken Keyboard
    // Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:
    //
    //     findBrokenKeys(correct phrase, what you actually typed)
    // Examples
    // findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
    //
    // findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
    //
    // findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
    // Notes
    // Broken keys should be ordered by when they first appear in the sentence.
    //     Only one broken key per letter should be listed.
    //     Letters will all be in lower case.

    var test = [0];
    console.log(test.length);

    function findBrokenKeys(str1, str2) {
        var right = str1.split("");
        var broken = str2.split("");
        var keys = [];
        for (var i = 0; i < str1.length; i++) {
            if (right[i] !== broken[i]) {
                for (var v = 1; v <= keys.length; v--) {
                     if (right[i] !== keys[v-1]) {
                        console.log(keys[v]);
                        console.log(right[i]);
                        keys.push(right[i]);
                    }
                }
            }
        }
        return keys;
    }

    console.log(findBrokenKeys("happy birthday", "hawwy birthday"));

    console.log(findBrokenKeys("starry night", "starrq light"));

    console.log(findBrokenKeys("beethoven", "affthoif5"));


    // ~~~~~~5 - Hard Edabit~~~~

//     Reverse the Odd Length Words
//     Given a string, reverse all the words which have odd length. The even length words are not changed.
//
//         Examples
//     reverseOdd("Bananas") ➞ "sananaB"
//
//     reverseOdd("One two three four") ➞ "enO owt eerht four"
//
//     reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
//     Notes
//     There is exactly one space between each word and no punctuation is used.


    // function reverseOdd(str) {
    //     if(str.length % 2 === 0){
    //         return str;
    //     } else {
    //         str.split("").reverse().join("");
    //     }
    // }
    //
    //
    // reverseOdd("Bananas") ➞ "sananaB"
    //
    // reverseOdd("One two three four") ➞ "enO owt eerht four"
    //
    // reverseOdd("Make sure uoy only esrever sdrow of ddo length")




    // ~~~~~~6 - Hard Edabit~~~~~~~


    // Mexican Wave Simulator
    //     // Mexican Wave Simulator
    //     //
    //     // The wave (known as a Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms.
    //     //
    //     //     Create a function that takes a string and turns it into a Mexican Wave.
    //     //
    //     //     Examples
    //     // wave("edabit") ➞ ["Edabit", "eDabit", "edAbit", "edaBit", "edabIt", "edabiT"]
    //     //
    //     // wave("just do it") ➞ ["Just do it", "jUst do it", "juSt do it", "jusT do it", "just Do it", "just dO it", "just do It", "just do iT"]
    //     //
    //     // wave(" ") ➞ []
    //     // Notes
    //     // All test cases will be lowercase strings.
    //     //     Ignore spaces (they are considered empty seats).
    //     // An empty string should return an empty array.

    // function wave(str) {
    //
    // }

})();


