// Print Numbers from 1 to 10
function print1To10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Sum of All Numbers in an Array
function sumAllNumbersInArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Find the Largest Number in an Array
function maximumOfArray(arr) {
  let max = Number.MIN_VALUE;
  for (const i of arr) {
    max = Math.max(max, i);
  }
  return max;
}

//  Reverse a String
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

// Calculate Factorial of a Number
function calculateFactorial(n) {
  let factorial = 1;
  do {
    factorial *= n;
  } while (--n > 0);

  return factorial;
}

// Check if a Number is Prime
function isPrimeNumber(n) {
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSequence(terms) {
  for (let i = 0; i < terms; i++) {
    console.log(fibonacci(i));
  }
}

// Palindrome Checker
function checkPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    // console.log(str.charAt(i), str.charAt(i));
    i++;
    j--;
  }
  return true;
}

// Find the Frequency of Characters in a String
function findCharacterFrequency(str) {
  const frequency = {};

  for (const i of str) {
    if (frequency.hasOwnProperty(i)) {
      frequency[i] += 1;
    } else {
      frequency[i] = 1;
    }
  }

  return frequency;
}

//  Sort an Array of Numbers

// Sort using sort() method

function sortArray(arr) {
  // Ascending
  //   return arr.toSorted((a, b) => a - b);
  // Descending
  //   return arr.toSorted((a, b) => b - a);
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(sortArray(arr));

// Sort using custom method

function quickSort(arr){
    
}