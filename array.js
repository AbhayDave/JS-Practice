const people = [
  { name: "Alice", age: 25, job: "Software Engineer" },
  { name: "Bob", age: 30, job: "Doctor" },
  { name: "Charlie", age: 22, job: "Student" },
];

// map() 
const names = people.map((person) => person.name);
console.log(names);

// filter()
const youngPeople = people.filter((person) => person.age < 30);
console.log(youngPeople);

// reduce() 
const totalAge = people.reduce(
  (accumulator, person) => accumulator + person.age,
  0
);
console.log(totalAge); 
