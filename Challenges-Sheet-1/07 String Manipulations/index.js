// Convert a String to Title Case
function titleCase(str) {
  if (!str) return str;
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Check for Anagrams
function isAnagrams(str1, str2) {
  const temp1 = str1.split("").sort().join("");

  const temp2 = str2.split("").sort().join("");

  if (temp1 === temp2) {
    return true;
  } else {
    return false;
  }
}

// Count Vowels and Consonants
function countVowelsAndConsonants(str) {
  const vowelRegex = /[aeiouAEIOU]/g;
  const consonantRegex = /[^aeiouAEIOU\s]/g;

  const vowelCount = (str.match(vowelRegex) || []).length;
  const consonantCount = (str.match(consonantRegex) || []).length;

  return { vowels: vowelCount, consonants: consonantCount };
}

// const text = "This is a test string";
// const result = countVowelsAndConsonants(text);
// console.log("Vowels:", result.vowels);
// console.log("Consonants:", result.consonants);

// Encode String with Caesar Cipher
function ceaserCipher(str, shift) {}

// Substring Search

function subStrSearch(str, searchK) {
  let i = str.indexOf(searchK[0]);
  let j = i + searchK.length;
  k = 3;
  while (true) {
    if (str.slice(i, j) === searchK) {
      return true;
    }

    if (j === str.length - 1) {
      return false;
    }

    i++;
    j++;
    k--;
  }
}

