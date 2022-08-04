// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }
  sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();
function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");
  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); 
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
    return (`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Sophia"));

  function add(x, y) {
    
    return x + y;
    
  } 
  console.log(add(1, 2)); 


function add(num1, num2){
    console.log(num1, num2);
    return num1 + num2;
}
console.log(add(2,4));