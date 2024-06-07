// Merge Two Sorted Arrays

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;

  const result = [];

  let arr1len = arr1.length;
  let arr2len = arr2.length;

  while (i < arr1len && j < arr2len) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  while (i < arr1len) {
    result.push(arr1[i++]);
  }

  while (j < arr2len) {
    result.push(arr2[j++]);
  }
  return result;
}

// Check for Duplicates in an Array

function checkDuplicates(arr) {
  const set = new Set();

  arr.forEach((item) => {
    if (set.has(item)) {
      console.log(`Duplicates item ${item}`);
    } else {
      set.add(item);
    }
  });
}

//  Rotate an Array to the Right by K Steps
function RotateArrayByK(arr, k) {
  let arrLen = arr.length;
  if (k < arrLen) {
    let tempArr = arr.splice(arrLen - k, k);
    arr.unshift(...tempArr);
  } else {
    k = k % arrLen;
    let tempArr = arr.splice(arrLen - k, k);
    arr.unshift(...tempArr);
  }

  return arr;
}

// Find the Majority Element in an Array

// Using Map
function findMajorityElemMap(arr) {
  const hashMap = new Map();

  arr.forEach((item) => {
    if (hashMap.has(item)) {
      hashMap.set(item, Number(hashMap.get(item) + 1));
    } else {
      hashMap.set(item, 1);
    }
  });

  let max = Number.MIN_VALUE;

  hashMap.forEach((val, key) => {
    if (val > max) {
      max = key;
    }
  });

  return max;
}

// console.log(findMajorityElemMap([1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 1, 5, 4]));

// Boyer-Moore Voting Algorithm (Only works when an element's count is more than 1/2 the length of arr)
function findMajorityElemMoore(arr) {
  let count = 0,
    candidate = -1;

  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      candidate = arr[i];
      count = 1;
    } else {
      if (arr[i] == candidate) {
        count++;
      } else {
        count--;
      }
    }
  }

  // Checking if majority candidate occurs more than
  // n/2 times
  count = 0;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] == candidate) count++;
  }

  if (count > arr.length / 2) return candidate;
  return -1;

  // The last for loop and the if statement step can
  // be skip if a majority element is confirmed to
  // be present in an array just return candidate
  // in that case
}

// console.log(
//   findMajorityElemMoore([1, 1, 2, 3,3,3,3,3,3,3,3,3, 4, 4, 4, 4, 4, 1, 5, 4])
// );

// Deep Clone an Object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Map Names to Objects

function mapNames(arr) {
  const obj = {};

  arr.forEach((val, idx, arr) => {
    obj[idx] = val;
  });

  return obj;
}

// const names = ["Abhay", "Manansh", "Angad"];
// console.log(mapNames(names));

// Filter Objects by a Property
function filterObj(arr) {
  return arr.filter((obj) => obj.age <= 28);
}

const people = [
  {
    name: "Alice",
    age: 30,
    city: "New York",
    occupation: "Software Engineer",
  },
  {
    name: "Bob",
    age: 25,
    city: "Los Angeles",
    occupation: "Musician",
  },
  {
    name: "Charlie",
    age: 42,
    city: "Chicago",
    occupation: "Doctor",
  },
  {
    name: "Diana",
    age: 28,
    city: "Seattle",
    occupation: "Teacher",
  },
  {
    name: "Ethan",
    age: 35,
    city: "Austin",
    occupation: "Writer",
  },
];

// console.log(filterObj(people));

// Sum Values of an Object
function sumObjValues(arr) {
  const sumWithInitial = arr.reduce((sum, curr) => (sum += curr.age), 0);
  return sumWithInitial;
}

// console.log(sumObjValues(people));

// Group Anagrams from a List of Words

function groupAnagrams(inp) {
  const obj = {};

  for (const i of inp) {
    const temp = i.split("").sort().join("");
    if (!obj.hasOwnProperty(temp)) {
      obj[temp] = [];
    }
  }

  for (const i of inp) {
    const temp = i.split("").sort().join("");
    obj[temp] = [...obj[temp], i];
  }

  return obj;  
}

const inp = ["eat", "tea", "tan", "ate", "nat", "bat"];


// Convert Object to Query String

function objectToQuery(obj) {


  let queryString = ""

  for (const key in obj) {
    // console.log(key);
    queryString += `${key}=${
      typeof obj[key] === "string" ? obj[key].replace(" ", "+") : obj[key]
    }&`;

    
  }

  return queryString.slice(0, queryString.length - 1)

}



console.log(objectToQuery({
    name: "Alice",
    age: 30,
    city: "New York",
  }));