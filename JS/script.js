// // tag Selector
// let btn = document.getElementsByTagName("button");
// console.log(btn[0]);

// // return HTML Collection
// // class Selector
// let title = document.getElementsByClassName("title");
// console.log(title[0]);
// // return HTMl Collection

// // Id Selector
// let message = document.getElementById("message");
// console.log(message);
// // return single value

// // query selector
// let titles = document.querySelector(".title");
// // return a single but the first one
// console.log(titles);

// // QuerySelectorAll
// let btns = document.querySelectorAll(".title");
// // return Nodelist
// console.log(btns[0]);

// Read and Write Operations
let title = document.querySelector(".title");
// read operation
// console.log(title.textContent);
// write
title.textContent = " DOM Manipulation";

// Style with JS
title.style.backgroundColor = "red";
title.style.color = "yellow";

// class Add/remove/toggle
title.classList.add("learning");
title.classList.add("JS");

// title.classList.remove("a");

// title.classList.toggle("a");

// attribute
const anchor = document.querySelector(".a");
console.log(anchor);
anchor.textContent = "About page";
anchor.href = "https://lms.codehubnexus.com/playground";
anchor.target = "_blank";

const newBtn = document.querySelector("#as");
const inputval = document.querySelector("input");
console.log(newBtn, inputval);

newBtn.addEventListener("click", () => {
  title.textContent = inputval.value;
  console.log(inputval.value);
});

const newHeading = document.createElement("h1");
newHeading.textContent = "Added from dom";
document.body.appendChild(newHeading);

let a = 1;
if (a == 10) {
  console.log("player winner");
} else {
  console.log("player loose");
}

let score = 75;

a == 10 ? (score = 90) : (score = 60);
if (score >= 90) {
  console.log("Bike");
} else if (score >= 70) {
  console.log("party");
} else {
  console.log("Pitayi");
}
