// setTimeout(() => {
//   console.log("Inside SetTimeout");
// }, 0);

setTimeout(() => {}, 2000);
// 1000=1sec

console.log("Learning");
console.log("Asynchronous Programming");

// Callback Hell
// Nested Functions
setTimeout(() => {
  console.log("Step1");
  setTimeout(() => {
    console.log("Step2");
    setTimeout(() => {
      console.log("Step 3");
    }, 4000);
  }, 3000);
}, 2000);

// Promises
// state
// 1.pending
// 2.resolve
// 3.reject

const myPromise = new Promise((resolve, reject) => {
  let sucess = false;
  if (sucess) {
    resolve("I am giving Party");
  } else {
    reject("I am not giving the party");
  }
});

// >then and .catch
// error Handling in built
// Chaining Process

myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

//   async And await

// FUnction Async
// Await before promise
// Inbuilt error Handling We don't
// We have to develope usimng try amnd catch
// Try Resolved /Succesful
// Catch Eror/ Rejected
const checkResultStatus = async () => {
  try {
    const msg = await myPromise;
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
};

checkResultStatus();

const handeApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
};

handeApi();
