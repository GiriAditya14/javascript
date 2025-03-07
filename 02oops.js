// 1. Prototype based programming
// 2. Class-object based programming: class and object/instance
// JS was/is a prototype based language bt it provided some synatxes 
// and keywords like class, object, constructor etc. and it seems
// like we are getting to object based programming route bt actually 
// it gets back to prototype based programming route only
// OOP is just a mask made over JS to make it look like an Object based pogramming language

// Everything is an object in JS world.


/* Prototypes: Whenever you declare anything in JS, prototypes are always there! */

// let computer = { cpu: 12 };
// let lenovo = { screen: "HD" };
// let tomHardware = {};
// console.log(`computer `, computer.__proto__);       // computer  [Object: null prototype] {}     // empty becoz default properties are not shown

/* 1. dunder prototype(__proto__): If you want to access any prototype for any particular object */

// here output is -> computer  [Object: null prototype] {}
// but in browser it is -> 
// computer  
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

// lenovo = {
//     screen: "HD",
//     __proto__: computer      // I want to access all the properties inside the 'computer'
// };
// console.log(`lenovo `, lenovo.__proto__);   // lenovo  { cpu: 12 }       // 'cpu' property shown becoz we have manually injected something


/* digaram:
              prototype
   computer ---> { } ----> cpu: 4
                  ^  
                  |   __proto__
                  |   
   lenovo -----> { } ----> screen: "HD"
*/

/* 2. Object.setPrototypeof(): another way to access prototype */

// let genericCar = { tyres: 4 };
// let tesla = {
//     driver: "AI",
// }
// Object.setPrototypeOf(tesla, genericCar);    // in the tesla I want to access all the properties of a generic car

// console.log(`tesla `, tesla);            // tesla  { driver: 'AI' }
// console.log(`genericCar `, genericCar);  // tesla  { tyres: 4 }
// console.log(`tesla `, tesla.tyres);      // tesla  4     // prefer the next better way and not this

// // Better way: If you are explicitly mentioning 'setPrototypeof()' then use 'getPrototypeOf()'
// console.log(`tesla `, Object.getPrototypeOf(tesla));    // tesla  { tyres: 4 }  // to get the newly injected property


/* Functional constructor */

// function greet(name){
//     console.log("Hello, ", name);
// }

// function Person(name, age){      // Constructor function
//     this.name = name;
//     this.age = age;
// }

// function Car(make, model){       // Constructor function
//     this.make = make;
//     this.model = model;
// }

// let myCar = new Car("Toyota", "Camry");     // if u want to create an object, u have to use the 'new' keyword
// console.log(myCar);                         // Car { make: 'Toyota', model: 'Camry' }

// let myNewCar = new Car("Tata", "Safari");   // without 'new' -> undefined
// console.log(myNewCar);                      // Car { make: 'Tata', model: 'Safari' }

// 'this' provides you the context that you are talking about this particular function and 
// you are talking about your copy of it.
// 'this' keyword refers to the newly created object inside the constructor function
 
// function Tea(type){
//     this.type = type;
//     this.describe = function(){
//         return `This is a cup of ${this.type}`   // can not refer 'type' without using 'this'
//     }
// }
// let lemonTea = new Tea("Lemon Tea");
// console.log(lemonTea);              // Tea { type: 'Lemon Tea', describe: [Function (anonymous)] }
// console.log(lemonTea.describe());   // This is a cup of Lemon Tea

/* Prototypes and constructor function */

// function Animal(species){
//     this.species = species;
// }
// Animal.prototype.sound = function(){        // function with prototype
//     return `${this.species} makes a sound`  // 'this' provides you the recent context
// }
// let dog = new Animal("Dog");    // 'new' creates a new object
// console.log(dog.sound());       // Dog makes a sound

// let cat = new Animal("Cat");
// console.log(cat.sound());       // Cat makes a sound

/* Errors: 'throw' */

// function Drink(name){
//     if(!new.target){
//         throw new Error("Drink must be called with new keyword");
//     }
//     this.name = name;
// }
// let tea = new Drink("tea");
// let coffee = Drink("coffee");   // without using 'new' throws an error -> Error: Drink must be called with new keyword


/* OOP: Encapsulation, Inheritance, Abstraction, Polymorphism */

// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     start: function(){
//         return `${this.make} car got started in ${this.year}`;
//     },
// };
// console.log(car.start());   // Toyota car got started in 2020
// but we cant create much copies of it
// this problem got solved using constructor functions
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let john = new Person("John doe", 20);
// console.log(john.name);     // John doe

// Prototype/Prototypal chain:
// function Animal(type){
//     this.type = type
// }
// Animal.prototype.speak = function(){
//     return `${this.type} makes a sound`;
// }
// Array.prototype.hitesh = function(){
//     return `Custom method ${this}`;
// }
// let myArray = [1,2,3];
// console.log(myArray.hitesh());      // Custom method 1,2,3
// let myNewArray = [1,2,3,4,5,6];
// console.log(myNewArray.hitesh());   // Custom method 1,2,3,4,5,6

// Class:
// All functions declared inside a class are termed as methods
// You dont need to use 'function' keyword before method name in a class
// class Vehicle {
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }
//     start(){
//         return `${this.model} is a car from ${this.make}`;
//     }
// }
// class Car extends Vehicle {     // putting a constructor is an optional thing
//     drive(){
//         return `${this.make} : This is an inheritance example`;
//     }
// }
// let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());     // Corolla is a car from Toyota
// console.log(myCar.drive());     // Toyota : This is an inheritance example

// let vehOne = Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);   // TypeError: Class constructor Vehicle cannot be invoked without 'new'

// Encapsulation: Concept to restrict the direct access to the object data
// class BankAccount {
//     #balance = 0;   // if you want no one to access this varibale/data, then just put a # before it
//                     // if they want to access then you have to provide custom methods
//     deposit(amount){
//         this.#balance += amount;   // I can access #balance within the class but nobody else can access it outside the class
//         return this.#balance;
//     }
//     getBalance(){       // whenever you protect any data using # sign, you dont want to totally hide it, but want the object to access it but with some restrictions
//         return `$ ${this.#balance}`;
//     }
// }
// let account = new BankAccount();
// // console.log(account.balance);   // undefined
// // console.log(account.#balance);   // error: cant access balance outside the class
// console.log(account.getBalance());  // $ 0

// Abstraction: Hides the complex implementation details
// class CoffeeMachine {
//     start(){
//         // call DB
//         // filter value
//         return `Starting the machine...`;
//     }
//     brewCoffee(){
//         // complex calculation
//         return `Brewing coffee`;
//     }
//     pressStartButton(){
//         let msg1 = this.start();
//         let msg2 = this.brewCoffee();
//         return `${msg1} + ${msg2}`;
//     }
// }
// let myMachine = new CoffeeMachine();
// console.log(myMachine.start());     // Starting the machine...
// console.log(myMachine.brewCoffee());    // Brewing coffee
// console.log(myMachine.pressStartButton());  // Starting the machine... + Brewing coffee

// Polymorphism: something that can take multiple forms
// class Bird{
//     fly(){
//         return `Flying...`;
//     }
// }
// class Penguin extends Bird{
//     fly(){
//         return `Penguins cant fly`;
//     }
// }
// let bird = new Bird();
// let penguin = new Penguin();
// console.log(bird.fly());        // Flying...        // method name is exactly same but the behaviour is different
// console.log(penguin.fly());     // Penguins cant fly

// Static method: Special methods that can only be called by class. Nobody can use these by creating objects
// class Calculator{
//     static add(a,b){    // without 'static' keyword, this will work
//         return a+b;
//     }
// }
// // // not allowed
// // let miniCalc = new Calculator();
// // console.log(miniCalc.add(2,3));     // TypeError: miniCalc.add is not a function
// // // class should call the static function
// console.log(Calculator.add(2,3));   // 5

// Getters and Setters: when an (_) comes, that means getters and setters are about to come
// class Employee{
//     // #salary;
//     constructor(name,salary){
//         if(salary<0){ throw new Error("Salary cannot be negative"); }
//         this.name = name;
//         this._salary = salary;      // needs to be underscore. (_) has no meaning, good practice
//         // this.#salary = salary;       // if used #, then you have made salary private and can not access salary
//     }
//     get salary(){
//         return `You are not allowed to see salary`;
//     }
//     set salary(value){
//         if(value<0) console.error("Invalid salary");
//         else this._salary = value;
        
//     }
// }
// let emp = new Employee("Alice", 50000);
// console.log(emp._salary);   // 50000    // but will not get it if used #
// console.log(emp.salary);    // You are not allowed to see salary. No need to access method like salary() as special keywords get and set are used 

// let emp1 = new Employee("Alice", -50000);   // by this we are invoking just the constructor, and not getter or setter
// console.log(emp1._salary);   // -50000  // but will not get it if used #

// // to solve setting negative value into constructor: putting up the variables with the constructor and updating the variable
// emp.salary = -60000;    // Invalid salary   // bcoz setter is invoked and condition is checked
// // so just put a check inside the constructor to solve this negative salary problem
// let emp2 = new Employee("Alice", -50000);    // Error: Salary cannot be negative




