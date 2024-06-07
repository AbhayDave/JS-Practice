const axios = require("axios")

// Promise

function delayedPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, delay);
  });
}

delayedPromise(2000)
  .then((data) => console.log(data)) // Handle success
  .catch((error) => console.error(error)); // Handle reject

// Async Await
async function delayedAction(delay) {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Async/Await resolved!"), delay);
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

delayedAction(2000);

// Fetch API
fetch("https://api.github.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data)) 
  .catch((error) => console.error(error));

// Axios Syntax
axios.get('https://api.github.com/users')
  .then(response => console.log(response.data)) 
  .catch(error => console.error(error)); 
