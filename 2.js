function greet(name) {
  console.log(name);
}

// greet("Dave");

const greet = (name) => {
  console.log(`Hello, my name is ${name}`);
};

greet("ABHAY");

const data = {
  person: {
    name: "Bob",
    age: 25,
  },
  hobbies: ["coding", "guitar"],
};

const {
  person: { name, age },
  hobbies: [hobby1, hobby2],
} = obj;
console.log(`Name: ${name}, Age: ${age}, Hobbies: ${hobby1}, ${hobby2}`);

function greeting(name = "_____") {
  console.log(`Hello, ${name}!`);
}

greet("Abhay");
greet();

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sumAll(1, 2, 3, 4);
console.log(result);

function log(...items) {
  items.forEach((item) => console.log(item));
}

const numbers = [10, 20, 30];
log(...numbers);
