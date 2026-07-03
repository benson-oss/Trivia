function calculateTax(amount) {
  return amount * 0.1; // 10% tax
}

function findMaximum(a, b) {
  return a > b ? a : b;
}

function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

console.log(calculateTax(100)); // 10
console.log(findMaximum(5, 8)); // 8
console.log(isPalindrome("madam")); // true


function numberTriangle(size) {
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j; // add numbers from 1 up to i
    }
    console.log(row);
  }
}

// Call the function
numberTriangle(10);
