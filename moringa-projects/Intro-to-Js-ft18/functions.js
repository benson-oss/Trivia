function calculateTax(amount) {
  let tax = amount * 0.10;
  console.log("Tax is:", tax);
}

calculateTax(100);

function convertToUpperCase(text) {
    let name = text;
    let upperName = name.toUpperCase(); 
    console.log(upperName);            
    return upperName;                   
}
convertToUpperCase("text"); 

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(findMaximum(10, 20)); 
console.log(findMaximum(50, 25));

function isPalindrome(word) {
  let reversed = word.split("").reverse().join(""); 
  return word === reversed;
}


console.log(isPalindrome("madam"));   
console.log(isPalindrome("benson")); 

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (originalPrice * discountPercentage) / 100;
  let finalPrice = originalPrice - discount;
  return finalPrice;
}
console.log(calculateDiscountedPrice(100, 20)); 
console.log(calculateDiscountedPrice(250, 15));