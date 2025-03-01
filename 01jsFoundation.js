// Printing

// console.log("Hii");     // gives a new line
// console.log("Aditya");

// process.stdout.write("chai");   // does not give new line
// process.stdout.write("chai");

// console.table("test");
// console.table({ city : "Bhopal"});

// console.warn({ city : "Bhopal"});

// Datatypes

// String
// Number 
// Boolean
// Bigint 

// Undefined : no definition
// Null : empty

// Object

// Symbol

// var score = 102  // old way
// let score = 102;    // new way
// let name = "Aditya";    // string
// let isLoggedin = false;    // bool

// let teaTypes = ["lemon tea", "orange tea", "oolong tea"]    // object
// let user = {firstname: "aditya", lastname: "giri"}  // object

// let getScore = score;
// console.log(getScore);

// Changes

// let gameName = "spiderman";
// gameName = "batman";
// console.log(gameName);

// const userName = "adityadotcom";    // const variables cannot be changed
// userName = "aditya";
// console.log(userName);

// Operations

// let score = 102;
// let bonus = 25;
// let totalScore = score + bonus

// let addition = 4 + 5
// let subtract = 9 - 3;
// let mult = 3 * 5
// let divi = 8 / 2
// let remainder = 9 % 2
// let expo = 2 ** 3   // 2^3

// let myScore = 110
// myScore++
// ++myScore

// let credits = 56;
// credits--
// --credits

// Comparisons

// let num1 = 3
// let num2 = 3
// let num3 = 6

// console.log(num1 == num2)   // comparison operator
// console.log(num1 != num3)   
// console.log(num1 > num3)   
// console.log(num1 < num3)   

// Logical operators

// && and : both conditions should be true
// || or : either one condition should be true
// ! reverse

// let isLoggedin = true;
// let isPaid = false;
// console.log(isLoggedin && isPaid);

// let isEmailUser = true;
// let isGoogleUser = false;
// console.log(isEmailUser || isGoogleUser);

// Assignment operation

// let score = 10 + 11     // assigning a value
// let num1 = 10;  
// // num1 = num1 + 5;
// num1 -= 5;      // another way of assigning a value
// num1 *= 5;      
// num1 /= 5;      
// num1 %= 5;  

// Operator precedence

// let score = 2 * 3 + 2 - 1;      // bad practice
// let score = ((2 * (3 + 2)) - 1);      // good practice

// Data types
// 1. Primitve : String, Boolean, Number, Null, Undefined, Symbol
// 2. Non-Primitve : Objects -> (Array, Functions, Objects)

// 1. Primitive data type
// Numbers
// let balance = 120;
// console.log(typeof(balance));
// console.log(typeof balance);

// let balance = 120;
// let anotherBalance = new Number(120)    // not a good idea to design a new Number
// console.log(balance);   // 120
// console.log(anotherBalance);    // [Number: 120]
// console.log(anotherBalance.valueOf());  // 120

// console.log(typeof balance);    // number
// console.log(typeof anotherBalance); // object

// Boolean
// let isActive = true;
// let isReallyActive = new Boolean(true);     // Not recommended

// Null and Undefined
// let firstName;   // if we comment this line and run second line alone, then it is NULL: not defined
// console.log(firstName);     // undefined

// let firstName = null;
// let lastName = undefined;
// console.log(firstName);   
// console.log(lastName);   

// String
// let myString = "Hello";
// let userName = 'Aditya';
// let greetMessage = `Hello`;

// let oldGreet = myString + "Aditya";     // no space between strings
// console.log(oldGreet);

// let newGreet = `Hello ${userName} !`    // inject as many variables as you want and can format also
// console.log(newGreet);      // known as String Interpolation

// let demoOne = `Value is ${2 * 2}`;      // can also do computation
// console.log(demoOne);

// Symbol: An object that returns a symbol and guarantees a unique value
// let sm1 = Symbol();
// let sm2 = Symbol();
// console.log(sm1);    // Symbol()
// console.log(sm2);    // Symbol()
// console.log(sm1 == sm2);    // false: both symbols are different

// let sm1 = Symbol("aditya");
// let sm2 = Symbol("aditya");
// console.log(sm1);
// console.log(sm2);
// console.log(sm1 == sm2);    // false

// 2. Non primitive data type
// Object: Larger space of memory is reserved 
// let obj = {}    // {} this is a valid object
// console.log(obj);
// console.log(typeof obj);

// let username = { 
//     firstName: "aditya",
//     isLogggedIn: true,
// }
// console.log(username);
// console.log(typeof username);

// const username = {      // only the block of memory cannot be changed 
//     firstName: "aditya",    // but can change the values inside the object
//     isLogggedIn: true,      // primitives inside object can be changed
// }
// a) Accessing primitve under an object using dot(.)
// console.log(username.firstName);    // accessing primitve under an object using dot(.)
// username.firstName = "kishan";    // changing the value of primitve and not the memory alloted to the object
// username.lastName = "giri";    // adding more primitve values under the object
// console.log(username.firstName);
// console.log(username.lastName);
// console.log(username);

// b) Accessing spaced primitve under an object using square brackets([])
// const username = {       
//     "first Name": "aditya",     // can add a space in the data type
//     isLogggedIn: true,  
// }
// username.lastName = "giri";
// console.log(username["first Name"]);    // use square bracket and " " and write the data type name inside ["__"]
// console.log(username.lastName);
// console.log(username);

// Date
// let today = new Date();
// console.log(today);     // 2025-02-10T03:31:07.665Z : not usable
// console.log(today.getDate());   // 10

// Array
// let heroes = ["a", "b", "c", true]      // in JS different data types are allowed
// let anotherUser = ["aditya",  true];
// console.log(anotherUser[0]);

// Type conversion
// console.log(1 + '1');   // implicit type conversion in JS : dont rely on this

// let isValue=true;
// console.log(isValue + 1);
// console.log(Number(isValue));   // explicit type conversion in JS

// let value="2";
// console.log(Number(value));
// console.log(typeof Number(value));

// let value="2abc";
// console.log(Number(value));     //NaN : Not a Number
// console.log(typeof Number(value));      // NaN is also a type of number

// console.log(Number(null));      // 0
// console.log(Number(undefined));     // NaN

// **JS dont have predefined data types, JS checks all the types on the go (dynamically)
// JS is dynamically typed language
// Java, C++ are statically typed language
// Typescript is JS with types

// Conditionals
// Challenge 1: Checking if a number is greater than another number
// let num1 = 5;
// let num2 = 8;
// console.log("Top code");
// if(num1 > num2){
//     console.log("num1 greater than num2");   
// }
// else{
//     console.log("Nope, num1 not greater than num2");   
// }
// console.log("Bottom code");

// Challenge 2: Checking if a string is equal to another string
// let username = "chai";
// let anotherUsername = "chai";
// if(username == anotherUsername){
//     console.log("Pick another username");
// }
// else{
//     console.log("You can pick this username");
// }

// Challenge 3: Checking if a variable is a number or not
// let score = 44;     // number
// let value = "44";   // string

// if(typeof score === "number"){
//     console.log("Yep, this is a number");
// }
// else{
//     console.log("Nope, this is not a number");
// }

// Challenge 4: Checking if a variable is an array or an object
// let data = [];  // object

// if(typeof data === "array"){
//     console.log("Yep, this is an array");
// }
// else if(typeof data === "object"){
//     console.log("Yep, this is an object");
// }
// else{
//     console.log("Nope, this is not an array");
// }

// Challenge 5: Checking if a boolean value is true or false
// let isTeaReady = false;
// if(isTeaReady) console.log("Tea is ready");
// else console.log("Tea is not ready");
 
// Challenge 6: Checking if an array is empty or not
// let items = ["item1"];
// console.log(items.length); 
// if(items.length === 0) console.log("Array is empty");
// else console.log("Array is not empty");

/* Ten challenges */
/* 1. Declare an array named 'teaflavours' that contains the 
strings 'greeb tea', 'black tea' and 'oolong tea'.
Access the first element of the array and store it 
in a variable named 'firstTea'. */

// let teaFlavours = ["green tea", "black tea", "oolong tea"];
// // second way 
// // let teaFl = new Array("green tea", "black tea", "oolong tea");
// const firstTea = teaFlavours[0];
// console.log(firstTea);

/* 2. Declare an array named 'cities' containing
'London', 'Tokyo', 'Paris' and 'New york'. Access 
the third element in the array and store it in a 
variable named 'favouriteCity'. */

// let cities = ["London", "Tokyo", "Paris", "New york"];
// const favouriteCity = cities[2];
// console.log(favouriteCity);

/* 3: Change second element of the array*/
// let teaTypes = ["herbal tea", "white tea", "masala cahi"];
// teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

/* 4: Add an element to array using 'push' method */ 
// let citiesVisited = ["Mubai", "Sydeny"];
// // citiesVisited[2] = "Berlin";    // 1st way
// // citiesVisited[citiesVisited.length] = "Berlin"; // 2nd way
// citiesVisited.push("Berlin");   // 3rd way
// console.log(citiesVisited);

/* 5 */ 
// let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// // const lastOrder = teaOrders.pop(teaOrders.length);  // dont need to give anything inside ()
// const lastOrder = teaOrders.pop();  // pop() automatically goes to last element in the array
// console.log(teaOrders);
// console.log(lastOrder);

/* 6: Create a softcopy of the array */
// let popularTeas = ["green tea", "oolong tea", "chai"];
// let softCopyTeas = popularTeas;
// popularTeas.pop();
// console.log(softCopyTeas);  // unusual behavior: softcopy also shows the changes
// console.log(popularTeas);

// let var1 = 5;
// let var2 = var1;
// var1 = 9;
// console.log(var2);  // 5: usual behavior(different from arrays)

/* 7: Create a hardcopy of an array*/
// let topCities = ["Berlin", "Singapore", "New york"];
// let hardCopyCities = [...topCities];    // 1st way: using Rest and Spread operators
// // let hardCopyCities = topCities.slice();    // 2nd way: less used
// topCities.pop();
// console.log(hardCopyCities);    // dont show the changes: separate copy
// console.log(topCities);

/* 8 Merge 2 arrays into one array */
// let europeanCities = ["Paris", "Rome"];
// let asianCities = ["Tokyo", "Bangkok"];
// 1st way
// let worldCities = europeanCities + asianCities; // String
// console.log(worldCities);
// console.log(typeof worldCities);    // String and not an array

//2nd way
// let worldCities = [europeanCities, asianCities];    // arrays in an array
// console.log(worldCities);  // [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]

// ***3rd way***
// let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

/* 9: Find length of the array and store it in a variable */
// let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
// const menuLength = teaMenu.length;
// console.log(menuLength);

/* ***10***: Check if an element is in array or not? */
// let cityBucketList = ["Kyoto", "London", "Cape town", "Vancouver"];
// let isLondonInList = cityBucketList.includes("London");     // includes(""); only works with true or false only
// console.log(isLondonInList);

// **shift: removes the first element 
// **unshift: injects elements at the start of array
// const arrray1 = [1, 2, 3];
// console.log(arrray1.shift());
// console.log(arrray1);   // output: [2, 3]

// const array2 = [1, 2, 3];
// console.log(array2.unshift(4,5));
// console.log(array2);   // output: [4, 5, 1, 2, 3]

// Loops:
// entry----> condition -----> set of instructions
//             |  |      true           |
//        false|  |   check again       |
//             V  ^_____________________V
//       rest of code
// Guidelines for loops:
// 1. keyword
// 2. termination condition
// 3. body of loop

// Types of loops:
// 1. while
// 2. do/while
// 3. for
// 4. for/in
// 5. for/of
// 6. for/each

/* 1. Write a while loop to calculate sum from 1 to 5 */ 
// let sum = 0;
// let i = 1;
// while (i <= 5) {
//     sum += i;   // sum = sum + i;
//     i++;
// }
// console.log(sum);

/* 2. Write a while loop that counts down from 5 to 1 and
stores the numbers in an array named 'countdown'. */
// let i = 5;
// // let idx = 0;
// let countdown = [];
// while (i>0){
//     countdown.push(i);  // OR
//     // countdown[idx] = i;
//     i--;
//     // idx++;
// }
// console.log(countdown);

/* 3. Write a do while loop that prompts a user to enter their 
favourite tea type until they enter "stop". Store each tea type
in an array named 'teaCollection'   */
// let teaCollection= [];
// let favouriteTeaType;
// do{    
//     favouriteTeaType = prompt(`Enter your favourite tea (type "stop" to finish)`);
//     if(favouriteTeaType != "stop"){     // bcoz of do while loop, for first input check for "stop"
//         teaCollection.push(favouriteTeaType);
//     }
// } while (favouriteTeaType != "stop");

/* 4. Write a do while loop that adds numbers from 1 to 3 and
stores the result in a variable named 'total'. */
// let i = 1;
// let sum = 0;
// do {
//     sum += i;
//     i++;
// } while (i<=3);
// console.log(sum);

/* 5. Write a for loop that multiplies each element in the
array `[2, 4, 6]` by 2 and stores the results in a new array 
named `multipliedNumbers` */
// let arr = [2, 4, 6];
// let multipliedNumbers = [];
// for (let i=0; i<arr.length; i++) {
//     multipliedNumbers[i] = 2 * arr[i];
//     // multipliedNumbers.push(arr[i] * 2);  // OR
// }
// console.log(multipliedNumbers);

/* 6. Write a for loop that lists all the cities in the array
["Paris", "New york", "Tokyo", "London"] and stores each city
in a new array named 'cityList' */
// let cities = ["Paris", "New york", "Tokyo", "London"];
// let cityList = [];
// for(let i=0; i<cities.length; i++){
//     cityList[i] = cities[i];
//     // cityList.push(cities[i]);    // OR
// }
// console.log(cityList);

/* 1. Write a for loop that loops through the array 
["green tea", "black tea", "chai", "oolong tea"] and stops the loop
when it finds 'chai'. Store all teas before "chai" in a new array named
'selectedTeas'. */
// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];
// for(let i=0; i<teas.length; i++){
//     if(teas[i] != "chai") selectedTeas.push(teas[i]);
//     else break;
// }
// console.log(selectedTeas);

/* 2. Write a for loop that loops through an array
["London", "New york", "Paris", "Berlin"] and skips "Paris".
Store the other cities in a new array named 'visitedCities'. */
// let cities = ["London", "New york", "Paris", "Berlin"];
// let visitedCities = [];
// for(let i=0; i<cities.length; i++){
//     if(cities[i] == "Paris") continue;
//     visitedCities.push(cities[i]);
// }
// console.log(visitedCities);

// for-of loop: You dont have to keep track of iterating with i, just write functionality logic

/* 3. Use a for-of loop to iterate through the array [1,2,3,4,5] and
stop when the number `4` is found. Store the numbers before `4` in an 
array named 'smallNumbers'. */
// let num = [1,2,3,4,5];
// let smallNumbers = [];
// for (const n of num) {
//     if(n == 4) break;
//     smallNumbers.push(n);
// }
// console.log(smallNumbers);

/* 4. Use a for-of loop to iterate through the array 
['chai', 'green tea', 'herbal tea', 'black tea'] and skip 
'herbal tea'. Store other teas in an array named 'preferredTeas'. */
// let teas = ['chai', 'green tea', 'herbal tea', 'black tea'];
// let preferredTeas = [];
// for (const t of teas){
//     if(t == "herbal tea") continue;
//     preferredTeas.push(t);
// }
// console.log(preferredTeas);

// for-in loop: 

/* 5. Use a for-in loop through an object containing city populations.
Stop the loop when the populations of 'Berlin' is found and store all
previous cities populations in a new object named 'cityNewPopulation'. */
// let citiesPopulation = {    // object
//     London:8900000,
//     "New york": 8400000,
//     Paris: 2200000,
//     Berlin: 3500000
// }
// let cityNewPopulation = {}
// // console.log(typeof citiesPopulation);   // object
// // console.log(Object.keys(citiesPopulation));     // gives all the keys of an object 
// // console.log(Object.values(citiesPopulation));     // gives all the values of an object 
// for (const city in citiesPopulation) {     // loops through every single key in an object, order is not important in object
// //  if (Object.prototype.hasOwnProperty.call(object, key)) {    // no use
// //      const element = object[key];       
// //  }
// //  console.log(city);      // gives all keys of the object
// //  console.log(citiesPopulation.city);     // undefined (wrong way)
// //  console.log(citiesPopulation[city]);     // values of all the keys (right way)
//     if(city == "Berlin") break;
//     cityNewPopulation[city] = citiesPopulation[city];   // key = value
// }
// console.log(cityNewPopulation);

/* 6. Use a for-in loop to loop through an object containing
city populations. Skip any city with a population below 3 million
and store the rest in a new object named 'largeCities'. */ 
// let worldCities = {
//     "Sydney": 5000000,
//     "Tokyo": 9000000,
//     "Berlin": 3500000,
//     "Paris": 2200000
// };
// let largeCities = {};
// for (const city in worldCities) {
//     if(worldCities[city] < 3000000) continue;
//     largeCities[city] = worldCities[city];
// }
// console.log(largeCities);

// forEach loop: I dont have to iterate the elements, that's why they work on particular data structures which have a fixed start and end
//               foreach() method of array instances executes a provided function once for each element

// function hello(){    // must give name to a fucntion

// }
// function (){    // but some function are not needed in the future, stored temporarily in the memory
                   // so dont give name to function
// }               // we can't design functions like this any where, so we write such func at very special places
    
// () => {      // another way of defining fucntion

// }

/* 7. Write a forEach loop that iterates through an array
["earl grey", "green tea", "chai", "oolong tea"]. Stop the 
loop when "chai" is found and store all previous tea types
in an array named 'availableTeas' */
// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];
// teaCollection.forEach(function(tea){    // each element in the collection would be named as tea at one iteration 
//     if(tea == "chai"){
//         // break;       // brea,k works only in loop, not in function's scope
//         return;     // used for functions
//     }    
//     availableTeas.push(tea);     // 4 functions are fired, and only 3rd function is returned 
// });
// console.log(availableTeas);

/* 8. Write a foreach loop that iterates thorugh the array
["Berlin", "Tokyo", "Sydney", "Paris"]. Skip "Sydeny" and store the other
cities in a new array named 'traveCities. */
// let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let travelCities = [];
// worldCities.forEach(function(city){     // OR ((city) => {});
//     if(city == "Sydney") return;        // only Sydney function is returned, not the function of Paris
//     travelCities.push(city);
// });
// console.log(travelCities);

/* 9. Write a for loop that iterates through the array [2,5,7,9].
Skip the values 7 and multiply the rest by 2. Store the results 
in a new array 'doubledNumbers'. */
// let numbers = [2,5,7,9];
// let doubledNumbers = [];
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] == 7) continue;
//     else doubledNumbers.push(numbers[i]*2);
// }
// console.log(doubledNumbers); 

/* 10. Use a for-of loop to iterate through the array
["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and
stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named 'shortTeas'. */
// let chai = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
// let shortTeas = [];
// for (const tea of chai){
//     if(tea.length > 10) break;
//     else shortTeas.push(tea);
// }
// console.log(shortTeas);

// Functions:
// function greet(name){       // () -> placeholder and name -> parameter
//     return `Hello ${name}`;
// }
// let result = greet("aditya");        // argument is passed
// console.log(result);


/* 1. Write a function named 'makeTea' that takes one parameter,
'typeOfTea' and returns a string like "Making green tea" when 
called with "green tea". Store the result in a variable named 'teaOrder'. */
// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
// }
// let teaOrder = makeTea("Green tea");
// console.log(teaOrder);

/* 2. Create a function named 'orderTea' that takes one parameter,
'teaType'. Inside this function, create another function named 
'confirmOrder' that returns a message like "Order confirmed for chai".
Call 'confirmOrder' from within 'orderTea' and return the result. */
// function orderTea(teaType){     // nested functions are allowed
//     function confirmOrder(){
//         return `Order confirmed for chai`;      // Js execution context
//     }
//     return confirmOrder();
// }
// let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

// function greet () {}     // regular function
// const greet = () => {}   // arrow function

/* 3. Write an arrow function named `calculateTotal` that takes two
parameters: `price` and `quantity`, The function should return the 
total cost by mulitplying the `price` and `quantity`. Store the result
in a variable named `totalCost`. */
// const calculateTotal = (price, quantity) => {        // Explicit return
//     return (price*quantity);
// }
// //  OR function can also be written as below: Implicit return
// const calculateTotal = (price, quantity) => price*quantity;
// let totalCost = calculateTotal(499, 100);
// console.log(totalCost);

// this keyword: this is a context

// function testOne(){
//     console.log(this);
// }
// testOne();

// const testTwo = () => {      // Arrow func does have the ability to reach out 'this' 
//     console.log(this);       // but it doesn't have the ability to pass on 'this' context anywhere
// }                            // There is not enough ability in 'this' in the arrow function   
// testTwo();

// Higher order function: Anything that takes function as a parameter or returns a function back is HOF.
// eg. for-each loop takes func as a parameter

/* 4. Write a function named 'processTeaOrder' that takes another
function, 'makeTea', as a parameter and calls it with the argument
'"earl grey"'. Return the result of calling 'makeTea'. */
// function makeTea(typeOfTea){            // placeholder() can be named anything!
//     return `makeTea: ${typeOfTea}`;
// }
// function processTeaOrder(teaFunction){  // not good to name the placeholder() same as the function to be passed as parameter. Placeholder() can be named anything.
//     return teaFunction("earl grey");    // returning a function with a special parameter
// }
// let order = processTeaOrder(makeTea);   // passing function as a parameter
// console.log(order);

// Whenever you create a function, all the inner functions 
// have an access to whatever we design in the outer function.
// This is a special behaviour which is only invoked inside the function and not anywhere else! 

/* 5. Write a function named 'createTeaMaker' that returns another
function. The returned function should take one parameter, 'teaType',
and return a message like '"Making green tea"'. Store the returned 
function in a variable named 'teaMaker' and call it with '"green tea"'. */
// function createTeaMaker(){
//     return function (teaType) {
//         return `Making ${teaType}`;
//     };
// }

// let teaMaker = function("green tea");     // my logic
// console.log(teaMaker);

// let teaMaker = createTeaMaker();        // hitesh logic (error): teaMaker is not a function
// console.log(teaMaker);      // teaMaker holds the definition of a function: [Function (anonymous)]
// console.log(teaMaker());      // Making undefined: because didnot passed anything

// let result = teaMaker("green tea");     // teaMaker is not a variable as it holds the definition of a function
//                                         // and whoever holds the function definition, we can execute that ()
// console.log(result);


 
