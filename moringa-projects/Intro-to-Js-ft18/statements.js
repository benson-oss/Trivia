const prompt = require('prompt-sync')(); // Add this at line 1// Conditional statements
// if statement
let number = -4;

if (number > 0) {
    console.log("The number is positive")
} else if (number < 0) {
    console.log("The number is negative")
} else {
    console.log("The number is zero")
}


let input = prompt("Please enter the students grade (0-100)");
let grade = Number(input);

if (isNaN(grade)) {
    console.log("That is not a valid number")
} else if (grade < 0 || grade > 100) {
    console.log("Please enter a number between 0 and 100")
} else {
    if (grade >= 90) {
        console.log("You have an A");
    } else if (grade >= 80) {
        console.log("You have a B");
    } else if (grade >= 60) {
        console.log("You have a C");
    } else if (grade >= 40) {
        console.log("You have a D");
    } else {
        console.log("You have failed");
    }
}


let count = 10;

while (count > 0) {
    console.log(count);
    count--;
}
console.log("Blast off!")

let myNumber = 0;

while (myNumber <= 0.8) {
    myNumber = Math.random();
    console.log(`current random number: ${myNumber}`);
}


let fruits = ["Mango", "Pineapple", "Kiwi", "Banana", "Ovacado", "Oranges"];

for (let i = 0; i < 2; i++) {
    console.log(fruits[i]);
}

let students = ["Messi", "Ronaldo", "Raila", "Isaac", "Jeremiah"]

for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}

for (let i = 0; i < 50; i++) {
    console.log("The count is:" + i)
}