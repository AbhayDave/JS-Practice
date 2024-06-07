// Sieve of Eratosthenes algorithm.

// Steps:

// 1. Handle non-positive input
// 2. Create a list to store prime status (true: potentially prime, false: composite)
// 3. make array false for 0 and 1 as they are not prime
// 4. Find primes and mark their multiples
// 5. Collect prime numbers from the isPrime list

// * Optimization: only iterate up to the square root of n

function sieveOfEratosthenes(n) {
  if (n <= 1) return [];

  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  const sqrtN = Math.sqrt(n);

  for (let i = 2; i <= sqrtN; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

const limit = 100;
// console.log(sieveOfEratosthenes(limit));

// Greatest Common Divisor (GCD) 

// using Euclidean algorithm: repeatedly divide the larger number by the smaller one and take the remainder
function gcd(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return null;
  }

  if (a === 0) return b;
  if (b === 0) return a;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

const num1 = 12;
const num2 = 18;
const greatestCommonDivisor = gcd(num1, num2);
// console.log(greatestCommonDivisor);

// Find All Possible Subsets of an Array
//  Solve a Linear Equation Parser
// Monte Carlo Estimation of Pi 
