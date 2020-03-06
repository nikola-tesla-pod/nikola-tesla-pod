


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


///////////////////////////////////////////////////////////////////////   WEEK 2!
////////////////// Problem 1:
//Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
//
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Examples
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
//
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4
//
// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5
//
// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4
//
// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

function getTotalPrice(groceries) {
    var counter = 0;

    groceries.forEach(function (grocery){
        if(grocery.price){
            counter += grocery.price * grocery.quantity;
        }
    });
    return parseFloat(counter.toFixed(1));
}

//////////////////More answers from edabit:

function getTotalPrice(groceries) {
    let total = 0;
    for (let x of groceries){
        total += x['quantity'] * x['price'];
    }
    return Number(total.toFixed(1));
}

//////////////////

function getTotalPrice(groceries) {
    let total = 0;
    for (let grocery of groceries) {
        total += grocery.quantity * grocery.price;
    }
    return Number(total.toFixed(1));
}

////////////////// Problem 2:
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

////////////////// Problem 3:

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


///////////////////////////////////////////////////////////////////////   WEEK 3!
/////////Problem 1: creating a function constructor within JS; constructor which will take a variable of fruit with 3 arguments and generate sentence with those arguments used to describe fruit

function fruit(name,color,shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}
var melon = new fruit('melon','green','round');
console.log(melon.describe());


/////////Problem 2 (edabit):
//Create the function that takes an array with objects and returns the sum of people's budgets.
//
// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700
//
// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

function getBudgets(arr) {
    return arr[0].budget + arr[1].budget + arr[2].budget;
}

//other answers
const getBudgets = arr =>
    arr.reduce((total, person) => total + person.budget, 0);

//
const getBudgets = arr => arr.reduce((a,v) => a + v.budget, 0);


/////////Problem 3 (edabit):
//Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
//
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
//
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
//
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
//
// numInStr(["this is a test", "test1"]) ➞ ["test1"]
// Notes
// The strings can contain white spaces or any type of characters.
// Bonus: Try solving this without regex.

function numInStr(arr) {
    var bucket = [];
    var numbers = [1,2,3,4,5,6,7,8,9,0];
    for (var i = 0;i < arr.length; i++){

        for (var j = 0; j < numbers.length; j++){
            if (arr[i].indexOf(numbers[j]) !== -1){
                bucket.push(arr[i]);
                break;
            }
        }

    }
    return bucket;
}