/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. global binding, when using this in a global binding you get everything javascript has to offer within the language. It gives you javascript in its entirety.
 * 2. implicit binding, when invoked, using dot notation, points to an object standing before the dot.
 * 3. new binding, refers to constructors to create new objects and this keyword is bound the new object
 * 4. explicit binding, uses .call, .apply, .bind which will reference the object from a global scope using this.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
// function sayHello(name){
//     console.log(this);
// }

// Principle 2

// code example for Implicit Binding
const person = {
  name: "John",
  age: 23,
  sayHello: function() {
    console.log(`Hello my name is ${this.name}`);
  }
};
person.sayHello();
// Principle 3

// code example for New Binding
let Animals = function(type, weight, name) {
  this.type = type;
  this.weight = weight;
  this.name = name;
};

let liger = new Animals("lion/tiger hybrid", 200, "Leo");
// Principle 4

// code example for Explicit Binding
