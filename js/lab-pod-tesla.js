


//edabit One:
//ReverseAndNot
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
//
// To illustrate:
//
// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
//
// Examples
// reverseAndNot(123) ➞ 321123
//
// reverseAndNot(123456789) ➞ 987654321123456789









function reverseAndNot(i) {
    var string = i.toString();

    return parseFloat(string.split("").reverse().join("") + string);
}

// cool way to reverse integers without string manipulation:


Reverse = function(number) {
    var reversed = 0;

    while (number != 0) {
        reversed *= 10;
        reversed += number % 10;
        number -= number % 10;
        number /= 10;
    }

    return reversed;

}

///edabit Two:
// use as third pod problem (hard difficulty):
//Create a Book constructor that has two properties :
//
// Title
// Author
// and two methods:
//
// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:
//
// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.
//
// For instance, if I instantiated the following book using this Book constructor function:
//
// Harry Potter - J.K. Rowling (HP)





function Book(title,author){
    this.title = title;
    this.author = author;

    this.getTitle = function(){
        return "Title: " + this.title;
    }
    this.getAuthor = function(){
        return "Author: " + this.author;
    }
}
var PP = new Book('Pride and Prejudice','Jane Austen');
console.log(PP.getTitle() + " - " + PP.getAuthor());
var H = new Book('Hamlet','William Shakespeare');
console.log(H.getTitle() + " - " + H.getAuthor());
var WP = new Book('War and Peace', 'Leo Tolstoy');
console.log(WP.getTitle() + " - " + WP.getAuthor());


//edabit Three:
//Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array":
function sevenBoom(arr){
    if (arr.join().includes(7)){
        return "Boom!";
    } else {
        return "there is no 7 in the array";
    }
}

//additional answers that are neat:

const sevenBoom = arr =>
    /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';

//

const sevenBoom =(arr) =>{
    return arr.toString().includes(7) ? "Boom!":"there is no 7 in the array"
}

//

function sevenBoom(arr) {
    for (var i in arr) {
        var a = (''+arr[i]).split('');
        for (var j in a) {
            if (a[j] == '7') return 'Boom!';
        }
    }
    return 'there is no 7 in the array';
}

//

function sevenBoom(arr) {
    for(let el of arr) { //According to user "undefined" on Stack Overflow, el is "just an identifier and it refers to an element, a DOM element, which is a convention in that library."
        if(el.toString().split('').includes('7')) {
            return "Boom!"
        }
    }
    return "there is no 7 in the array"
}


//////// WEEK 2!

// Write a function that converts an object into an array, where each element represents a key-value pair.
//
//     Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
//
// toArray({}) ➞ []

function toArray(obj) {
    bucket = [];
    for (var key in obj){
        bucket.push([key, obj[key]]);
    }
    return bucket;
}

// additional answers on edabit:

function toArray(obj) {
    return Object.entries(obj);
}


////////////////////

function toArray(obj) {
    return Object.keys(obj).map(x => [x, obj[x]]);
}

////////////////////

function toArray(obj) {
    var a = [];
    for(var i in obj){
        a.push([i,obj[i]]);
    }
    return a;
}

////////////////////

function toArray(obj) {
    let stack = [];
    for (let key in obj) {stack.push([key, obj[key]])}
    return stack;
}

////////////////////Favorite answer!!!:

function toArray(obj) {
    let keys = Object.keys(obj);
    let vals = Object.values(obj);
    let answer = [];

    for(let i = 0; i < keys.length; i++){
        answer.push([keys[i], vals[i]]);
    }

}

////////////////// Problem 2 (week 2):

//Write a function that returns the least common multiple (LCM) of two integers.
//
// Examples
// lcm(9, 18) ➞ 18
//
// lcm(8, 5) ➞ 40
//
// lcm(17, 11) ➞ 187
// Notes
// Both values will be positive.
// The LCM is the smallest integer that divides both numbers such that the remainder is zero.

function lcm(n1, n2) {
    if ((typeof n1 !== 'number') || (typeof n2 !== 'number'))
        return false;
    return (!n1 || !n2) ? 0 : Math.abs((n1 * n2) / gcd(n1, n2));
}

function gcd(n1, n2) {
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);
    while(n2) {
        var newNum = n2;
        n2 = n1 % n2;
        n1 = newNum;
    }
    return n1;
}

