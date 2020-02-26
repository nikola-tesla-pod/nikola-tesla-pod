'use strict';

// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.From edabit

console.log("INDEX MULTIPLIER");
function indexMultiplier(arr) {
    var empty = [];
    if(arr.length === 0) {
        return 0
    }
    for (var i = 0; i  < arr.length; i++){
        empty.push(arr[i] * i)
    }
    // for (var j = 0; j  < empty.length; j++){
        var add = empty.reduce((a, b) => a + b, 0);
    // }
    return add;
}

console.log(indexMultiplier([1,3,3]));
/* Realized  I did not need 2 for loops. Used the add function that I used in my 101 to add everything up.
* Kept getting undefined for my empty array until I moved the if statement to the top of the function. After i saw the solutions of others i realized I over complicated it.*/


// Create a function that determines whether or not a player is holding a Full House in their hand. A hand is represented as an array of 5 cards. A full house is defined as a pair of cards and a three-of-a-kind. From edabit.
function isFullHouse(hand) {
    hand.sort();
    if((hand[0] === hand[1] && hand[0] === hand[2] && hand[3] === hand[4]) || (hand[0] === hand[1] && hand[2] === hand[3] && hand[2] === hand[4]) ){
        return true
    }
    else {
        return false
    }
}
console.log(isFullHouse([10, 'A', 'A', 6, 7]));
console.log(isFullHouse([1, 2, 2, 1, 1]));
console.log(isFullHouse(['Q', 'K', 'Q', 'K', 'Q']));

var arr = ['Q', 'K', 'Q', 'K', 'Q'];
arr.sort();
console.log(arr);

/*Tried to do a for loop and filter out the cards that repeated 3 and 2 times. Still wasn't getting it. Tried a lot of other stuff complicated things. At last realized i could sort the array and could check the first 3 against each other and the last two in the array against each other. */

// Make a function called twoDice() that returns the sum of rolling two six sided dice.

console.log("TWO DICE");
function twoDice() {
    var dieOne = [1, 2, 3, 4, 5, 6];
    var dieTwo = [1, 2, 3, 4, 5, 6];
    var roll1 = dieOne[Math.floor(Math.random() * dieOne.length)];
    var roll2 = dieOne[Math.floor(Math.random() * dieOne.length)];
    for (var i = 0; i < dieOne; i++) {
    }
    for (var j = 0; j < dieTwo; i++) {
    }
    console.log('' + roll1 + " " + roll2);
    return (roll1) + (roll2)
}

console.log(twoDice());


console.log("TWENTY SIDED");
function twentySidedDie() {
    var twentySided = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var randomInt = twentySided[Math.floor(Math.random() * twentySided.length)];
    for (var i = 0; i <= twentySided; i++) {
    }
    return parseInt(randomInt);
}
console.log(twentySidedDie());


// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
console.log("12 SIDED");
function twelveSidedDie() {
    var twelveSided = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12];
    var randomInt = twelveSided[Math.floor(Math.random() * twelveSided.length)];
    for (var i = 0; i <= twelveSided; i++) {
    }
    return parseInt(randomInt);
}

console.log(twentySidedDie());

console.log('TETRAHEDRON');
function tetrahedron() {
    var arr = [1, 2, 3, 4];
    var randomInterger = arr[Math.floor(Math.random() * arr.length)];
    for (var i = 0; i < randomInterger; i++) {
    }
    return parseInt(randomInterger)
}
console.log(tetrahedron());

console.log('ROLL DIE');
function rollDie() {
    var arr = [1, 2, 3, 4, 5, 6];
    var randomInterger = arr[Math.floor(Math.random() * arr.length)];
    for (var i = 0; i < randomInterger; i++) {
    }
    return parseInt(randomInterger)
}
console.log(rollDie());

console.log("LIST OF ROLLS FROM DIE FUNC");
function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    var rolls = [];
    for (var i = 0; i < numberOfRolls; i++) {
        // rolls.push(numberOfRolls[i]);
        //   rolls[i] = Math.floor((Math.random() * (diceFunction )) + 1)
        rolls.push(diceFunction());
        // console.log(diceFunction());

    }
    return rolls;
}
console.log(listOfRollsFromDieFunc(20,twelveSidedDie) );