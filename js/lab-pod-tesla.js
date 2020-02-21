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