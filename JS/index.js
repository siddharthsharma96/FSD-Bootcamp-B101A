// // console.log(a);
// // // Hoisting
// // var a = 10;

// // console.log(a);

// // console.log(b);
// // temporal dead zone (TDZ)
// let b = 20;
// console.log(b);

// b = 30;
// console.log(b);

// const c = 30;
// // c = 40;
// console.log(c);

// // {
// //   let a = 10;
// // }
// // console.log(a);

// // Functions

// //1. Named function

// // function functionName(){
// //     code we want to execute
// // }
// add();

// // function decalare
// function add() {
//   console.log("Hi this is a named function");
//   console.log("Function value is", 2 + 3);
// }

// // function call
// add();

// // addSum();
// //2. function expression
// let addSum = function () {
//   console.log("Hi this is a Function Expression ");
//   console.log("Function value is", 2 + 3);
// };

// addSum();

// // 3. Arrow Function
// var d = () => {
//   console.log("Hi This is a Arrow Function invented in es6 fetaure");
//   console.log("hello world ");
// };

// d();

// //4. IIFE Imediate Invoked Function Expression

// (function () {
//   console.log("IIFE");
// })();

// function sumOfTwo(a, b) {
//   console.log("value is ", a + b);
// }

// // arguments
// sumOfTwo(3, 5);
// sumOfTwo(10, 12);

// let aa = (a, b) => {
//   console.log("sum, of two number using arrow", a + b);
// };

// aa(3, 4);

// Selecting Elements
// let b = document.getElementsByTagName("h1");
let titleEl = document.getElementsByClassName("title");
let btn = document.getElementById("changeBtn");
// let a = document.querySelector(".title");
titleEl.style.color = "red";
titleEl.innerHTML = "wse";
