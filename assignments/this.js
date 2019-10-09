/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global: "this" refers to the entire window object
* 2. Implicit: "this" refers to the object it exists in
* 3. New: "this" refers to the object that is created and returned by the function
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globalBinding(window) {
    console.log(this);
    return window;
}
globalBinding("This is Window");

// Principle 2

// code example for Implicit Binding

const exampleObj = {
    greeting: "Hey",
    sayLocation: function(location) {
        console.log(`${this.greeting} I'm from ${location}`);
        console.log(this);
    }
};

exampleObj.sayLocation('Cincinnati');

// Principle 3

// code example for New Binding

function User (nameString, emailString, passwordString) {
    this.name = nameString;
    this.email = emailString;
    this.password = passwordString;
    this.saysHello = function() {
        console.log("Hi " + this.name);
        console.log(this);
    }
}

let userKaylen = new User("Kaylen", "kaylen.milliner@gmail.com", "abc123");
let userNelyak = new User("Nelyak", "nel.yak@gmail.com", "123abc");

userKaylen.saysHello();
userNelyak.saysHello();

// Principle 4

// code example for Explicit Binding

userKaylen.saysHello.call(userNelyak);
userNelyak.saysHello.apply(userKaylen);

