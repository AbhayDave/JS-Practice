
const Animal = {
  speak() {
    console.log("Generic animal sound");
  },
};

const dog = Object.create(Animal);

dog.speak();


dog.speak = function () {
  console.log("Woof!");
};

dog.speak();


const cat = Object.create(Animal);

cat.speak(); 

cat.purr = function () {
  console.log("Purr...");
};

cat.purr(); 