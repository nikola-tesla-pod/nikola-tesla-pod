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


    // function findBrokenKeys(str1, str2) {
    //     var right = str1.split("");
    //     var broken = str2.split("");
    //     var keys = [];
    //     for (var i = 0; i < str1.length; i++) {
    //         if ((right[i] !== broken[i]) && (!keys.includes(right[i]))) {
    //             keys.push(right[i]);
    //             /*
    //             if(keys.includes())
    //             for (var v = 1; v <= keys.length; v--) {
    //                  if (right[i] !== keys[v-1]) {
    //                     console.log(keys[v]);
    //                     console.log(right[i]);
    //                     keys.push(right[i]);
    //                 }
    //             }
    //
    //              */
    //
    //         }
    //     }
    //     return keys;
    // }
    //
    // console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
    //
    // console.log(findBrokenKeys("starry night", "starrq light"));
    //
    // console.log(findBrokenKeys("beethoven", "affthoif5"));




    // ~~~~~~ 5 HARD Edabit ~~~~~~~


    // Comments: This one was pretty straightforward aside if the start time was after five o'clock which threw me for a short time. But nothing too bad.'





    // Working 9 to 5
    // Write a function that calculates overtime and pay associated with overtime.
    //
    //     Working 9 to 5: regular hours
    // After 5pm is overtime
    // Your function gets an array with 4 values:
    //
    //     Start of working day, in decimal format, (24-hour day notation)
    // End of working day. (Same format)
    // Hourly rate
    // Overtime multiplier
    // Your function should spit out:
    //
    //     $ + earned that day (rounded to the nearest hundreth)
    // Examples
    // overTime([9, 17, 30, 1.5]) ➞ "$240.00"
    //
    // overTime([16, 18, 30, 1.8]) ➞ "$84.00"
    //
    // overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
    // 2nd example explained:
    //
    //     From 16 to 17 is regular, so 1 * 30 = 30
    // From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
    // 30 + 54 = $84.00


    // function overTime(arr) {
    //     var start = arr[0];
    //     var end = arr[1];
    //     var rate = arr[2];
    //     var over = arr[3];
    //     var money = 0;
    //     if(end <= 17){
    //         money = (end - start) * rate;
    //     } else if (end > 17 && start > 17) {
    //         money = ((end - start) * rate) * over;
    //     } else {
    //         var extra = ((end - 17) * rate) * over;
    //         money = (Math.abs(17 - start) * rate) + extra;
    //     }
    //     return "$" + money.toFixed(2);
    // }
    //
    //
    // console.log(overTime([9, 17, 30, 1.5]));
    // // "$240.00"
    //
    // console.log(overTime([16, 18, 30, 1.8]));
    // // "$84.00"
    //
    // console.log(overTime([13.25, 15, 30, 1.5]));
    // // "$52.50"
    //
    // console.log((overTime([18, 20, 32.5, 2])));



// ~~~~~~ 6 Hard Edabit ~~~~~~~~


    // Comments: This problem was a little harder, but also ties with some interests to maybe start a little game-dev one day. It went smoothly except for figuring out bugs that caused the damage to be miscalculated - the error was I had damage calculation reversed and taking absolute value of that, oops!





    //     Heroes vs. Monsters: a Role Playing Game Battle System
//     You are implementing a battle system for a simple role-playing game. A hero is fighting various monsters, and you have to determine the battle's outcome for each engaged skirmish. Hero and monsters share some stats:
//
//     HP or Health Points: The amount of damage the character can sustain. If it reaches 0 (or less) the character dies.
//         ATT or Attack: The character offensive capacity.
//         DEF or Defense: The character defensive capacity.
//         For either hero and monster, the damage inflicted is calculated subtracting the opponent's defense score from the attacker doubled attack score.
//
//     In each round hero attacks first, and his damage rate is subtracted from the monster's HP. If the monster survives (HP > 0), it is his turn to attack. If the hero survives (HP > 0), a new round starts. The hero can also have some POT, or Healing Potions, in his backpack: only when his HP is equal to or lower than 10, a potion can (and must) be used for regaining 10 HP at the start of a new round. When the hero heals, he can't attack, but he receives only half damage from the monster's attack. Every potion can be used only once, then it must be discarded.
//
//     Given an object containing the character's stats (with p-prefix ones being the hero's stats and m-prefix ones being the monster's) you must return a string:
//
//     "Victory in x rounds" if the hero wins.
//     "Game Over in x rounds" if the monster wins.
//     (with x being the number of rounds elapsed)
//
//     Examples
//     battle({
//         pHP: 12,
//         pATT: 10,
//         pDEF: 10,
//         pPOT: 0,
//         mHP: 20,
//         mATT: 6,
//         mDEF: 14
//     }) ➞ "Victory in 4 rounds"
//
// // Hero's damage rate = (10 * 2) - 14 = 6
// // Monster's damage rate = (6 * 2) - 10 = 2
// // Round 1: mHP - 6 = 14, pHP - 2 = 10
// // Round 2: No potions to use! mHP - 6 = 8, pHP - 2 = 8
// // Round 3: mHP - 6 = 2, pHP - 2 = 6
// // Round 4: mHP - 6 = -4 ... monster is dead
//
//     battle({
//         pHP: 10,
//         pATT: 10,
//         pDEF: 10,
//         pPOT: 2,
//         mHP: 10,
//         mATT: 8,
//         mDEF: 14
//     }) ➞ "Victory in 3 rounds"
//
// // Hero's damage = 6, monster's damage = 6
// // Round 1: mHp - 6 = 4, pHP - 6 = 4
// // Round 2: Player uses a potion, heals 10 HP, receive half the monster damage, pHP = 11
// // Round 3: mHP - 6 = -2 ... monster is dead
//
//     battle({
//         pHP: 12,
//         pATT: 7,
//         pDEF: 6,
//         pPOT: 2,
//         mHP: 30,
//         mATT: 8,
//         mDEF: 10
//     }) ➞ "Game Over in 5 rounds"
//
// // Hero's damage rate = 4, Monster's damage rate = 10
// // Round 1: mHP - 4 = 26, pHP - 10 = 2
// // Round 2: Hero heals 10 hp, monster hit for 5 HP, pHP = 7
// // Round 3: Hero heals 10 hp, monster hit for 5 HP, pHP = 12
// // Round 4: mHP - 4 = 22, pHP - 10 = 2
// // Round 5: No potions to use! mHP - 4 = 18, pHP - 10 = -8 ... hero is dead
//     Notes
//     Hero attacks (or heals) first in each round.
//         A potion must be used when HP is equal to or less than 10.
//     When the hero uses a potion, he can't attack the monster in the same round, but he can defend from the monster's attack, receiving only half the damage.
//         Remember to discard the potion after using it.



//     function battle(data) {
//         var round = 0;
//         var win = "";
//         var lose = "";
//
//         while((data.pHP > 0) && (data.mHP > 0)){
//             ++round;
//             var pDAM = (data.pATT * 2) - data.mDEF;
//             var mDAM = (data.mATT * 2) - data.pDEF;
//             if (data.pHP <= 10 && data.pPOT > 0) {
//                 data.pHP = (data.pHP + 10) - (mDAM / 2);
//                 data.pPOT--;
//             } else {
//                 data.pHP = data.pHP - (mDAM);
//                 data.mHP = data.mHP - (pDAM);
//             }
//             if (data.mHP <= 0) {
//                 win = "Victory in " + round + " rounds";
//             }
//             if (data.pHP <= 0) {
//                 lose = "Game Over in " + round + " rounds";
//             }
//         }
//
//         if(win !== ""){
//             return win;
//         } else {
//             return lose;
//         }
//     }
//
//     console.log(battle({pHP: 10, pATT: 10, pDEF: 10, pPOT: 0, mHP: 20, mATT: 6, mDEF: 14}));
//     // "Victory in 4 rounds", "Example #1")
//     console.log(battle({pHP: 10, pATT: 10, pDEF: 10, pPOT: 2, mHP: 10, mATT: 8, mDEF: 14}));
//     // "Victory in 3 rounds", "Example #2")
//     console.log(battle({pHP: 12, pATT: 7, pDEF: 6, pPOT: 2, mHP: 30, mATT: 8, mDEF: 10}));
//     // "Game Over in 5 rounds", "Example #3")
//     console.log(battle({pHP: 100, pATT: 12, pDEF: 8, pPOT: 3, mHP: 200, mATT: 14, mDEF: 8}));
//     // "Game Over in 5 rounds")
//     console.log(battle({pHP: 300, pATT: 5, pDEF: 4, pPOT: 0, mHP: 120, mATT: 10, mDEF: 6}));
// // "Game Over in 19 rounds")
//     console.log(battle({pHP: 1480, pATT: 16, pDEF: 16, pPOT: 4, mHP: 860, mATT: 14, mDEF: 20}));
//     // "Victory in 72 rounds")
//     console.log(battle({pHP: 230, pATT: 3, pDEF: 20, pPOT: 2, mHP: 140, mATT: 12, mDEF: 4}));
//     // "Game Over in 64 rounds")
//     console.log(battle({pHP: 90, pATT: 9, pDEF: 10, pPOT: 8, mHP: 300, mATT: 8, mDEF: 4}));
//     // "Victory in 29 rounds")



    // ~~~~~~~ 6 Very Hard Edabit ~~~~~~


    // Comments: This one was quite the doozy. I actually got some help from my roommate that is a programmer by trade and it took us a bit after I had tried all of yesterday and a bit the day before (with breaks and other activities, of course). There are two because the complement version was the one he suggested where, instead of searching elements of the array first to confirm they have the vowel we need, then kick them out if they have vowels we don't need, my roommate said we should just check if they have vowels we don't need and kick those out. Both functions work.




    // Vowel Families
    // Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
    //
    //     Examples
    // sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]
    //
    // sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]
    //
    // sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]
    // Notes
    // Words will contain only lowercase letters, and may contain whitespaces.
    //     Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).


  //   function sameVowelGroup(w){
  //       if(w.length<1){
  //           return [];
  //       }
  //       var vowels = ['a', 'e', 'i', 'o', 'u'];
  //       var pushArray = [w[0]];
  //       var containedVowels = [];
  //       // find vowels in first word
  //       for(var f = 0; f < pushArray[0].length; f++) {
  //           for (var v = 0; v <= vowels.length; v++) {
  //               if (pushArray[0].charAt(f) === vowels[v]) {
  //                   containedVowels.push(vowels[v]);
  //               }
  //           }
  //       }
  //       //find vowels not in first word
  //       var rejectedVowels = vowels;
  //       for(var k = 0; k < rejectedVowels.length; k++) {
  //           for (var z = 0; z < containedVowels.length; z++) {
  //               if (rejectedVowels[k].includes(containedVowels[z]) === true) {
  //                   rejectedVowels[k] = ""
  //               }
  //           }
  //       }
  //       w.forEach(function (chosen) {
  //           for (var q = 0; q < chosen.length; q++) {
  //               for (var p = 0; p < containedVowels.length; p++) {
  //                   if ((chosen.charAt(q) === containedVowels[p]) && pushArray.includes(chosen) === false) {
  //                       pushArray.push(chosen);
  //                   }
  //               }
  //           }
  //       });
  //       var validWords=true;
  //       var y=1;
  //       while(y < pushArray.length) {
  //           console.log(y);
  //           var final = pushArray[y];
  //           console.log(final);
  //           validWords=true;
  //
  //           for (var u = 0; u < final.length; u++) {
  //               for (var e = 0; e < rejectedVowels.length; e++) {
  //
  //                   if ((final.charAt(u) === rejectedVowels[e])&&validWords) {
  //                       validWords=false;
  //                       pushArray.splice(y, 1);
  //
  //                   }
  //               }
  //           }
  //           if(validWords){
  //               y=y+1;
  //           }
  //       }
  //       return pushArray;
  //   }
  //
  //   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //
  //   function sameVowelGroup_Complement(w) {
  //       if((w===undefined)||(w.length<1)){
  //           return [];
  //       }
  //       var vowels = ['a', 'e', 'i', 'o', 'u'];
  //       var notVowels=vowels;
  //       var firstWord=w.shift();
  //       var validWords=[firstWord];
  //
  //       for(var currentVowel=0; currentVowel<vowels.length;currentVowel++){
  //           if(firstWord.includes(vowels[currentVowel])){
  //               notVowels.shift();
  //           }
  //       }
  //
  //       for(var currentWord=0;currentWord<w.length;currentWord++){
  //           let targetWord=w[currentWord];
  //           for(var currentVowel=0;currentVowel<targetWord.length;currentVowel++){
  //               if(targetWord.includes(notVowels[currentVowel])){
  //                   break;
  //               }
  //               if(currentVowel>=targetWord.length){
  //                   validWords.push(w[currentWord]);
  //               }
  //           }
  //       }
  //
  //       return validWords;
  //   }
  //
  //   console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));
  //   // ["toe", "ocelot"]
  //   //
  //   console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]));
  //   console.log(sameVowelGroup_Complement(["many", "carriage", "emit", "apricot", "animal"]));
  //   // ["many"]
  //   //
  //   console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]));
  //   // ["hoops", "bot", "bottom"]
  //
  // console.log(sameVowelGroup(["alimony", "jumbawumba", "alouicious", "madeupwordioa", "alio", "ecstasy", "monia"]));
  // // ["alimony", "alio", "monia"]
  //
  //












    // vvvvvv  WORK ON LATER vvvvv

    // ~~~~~ 7 Very Hard Edabit ~~~~~~

//     Remove the Last Vowel
//     Write a function that removes the last vowel in each word in a sentence.
//

//
//     function removeLastVowel(str) {
//         var vowels = ['a', 'e', 'i', 'o', 'u'];
//         var array = str.split(" ");
//         for(var i = array[i].length; i < array.length; i++){
//             for(var v = 0; v < vowels.length; v++){
//                 if(str.charAt(i).toLowerCase() === vowels[v]){
//     }
//
//
//
//
// //         Examples
//     removeLastVowel("Those who dare to fail miserably can achieve greatly.");
// // ➞ "Thos wh dar t fal miserbly cn achiev gretly."
// //
//     removeLastVowel("Love is a serious mental disease.");
// // ➞ "Lov s  serios mentl diseas"
// //
//     removeLastVowel("Get busy living or get busy dying.")
// // ➞ "Gt bsy livng r gt bsy dyng"
// //     Notes
//     Vowels are: a, e, i, o, u (both upper and lowercase).

































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


