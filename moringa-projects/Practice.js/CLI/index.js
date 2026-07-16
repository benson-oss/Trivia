// CLI TRIVIA GAME
// Author: Your Name

// Import prompt-sync for user input
const prompt = require("prompt-sync")({ sigint: true });

// QUESTIONS ARRAY
// Every question is stored as an object.

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "A. Hyper Text Markup Language",
            "B. High Transfer Machine Language",
            "C. Hyperlinks and Text Markup Language",
            "D. Home Tool Markup Language"
        ],
        answer: "A"
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Apple"
        ],
        answer: "B"
    },

    {
        question: "Which keyword declares a constant variable?",
        options: [
            "A. let",
            "B. variable",
            "C. const",
            "D. var"
        ],
        answer: "C"
    },

    {
        question: "Which method adds an element to an array?",
        options: [
            "A. add()",
            "B. push()",
            "C. append()",
            "D. insert()"
        ],
        answer: "B"
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "A. <!-- -->",
            "B. ##",
            "C. //",
            "D. **"
        ],
        answer: "C"
    }
];

// VARIABLES

let score = 0;

// Game timer (seconds)
const GAME_TIME = 60;

// Store starting time
let startTime;

// START GAME

function startGame() {

    console.clear();

    console.log("===");
    console.log("      CLI TRIVIA GAME");
    console.log("===\n");

    console.log("Rules");
    console.log("------------------------------");
    console.log("1. Answer using A, B, C or D");
    console.log("2. You have 60 seconds.");
    console.log("3. Every correct answer earns 1 point.\n");

    prompt("Press ENTER to start...");

    startTime = Date.now();

    askQuestions();
}

// ASK QUESTIONS

function askQuestions() {

    for (let i = 0; i < questions.length; i++) {

        // Check timer

        let elapsedSeconds =
            Math.floor((Date.now() - startTime) / 1000);

        if (elapsedSeconds >= GAME_TIME) {

            console.log("\nTime is up!");
            break;
        }

        console.log("\n--------------------------------");
        console.log(`Question ${i + 1}`);
        console.log("--------------------------------");

        console.log(questions[i].question);

        // forEach() iteration method

        questions[i].options.forEach(option => {
            console.log(option);
        });

        let answer =
            prompt("\nYour Answer: ").toUpperCase();

        checkAnswer(answer, questions[i].answer);
    }

    endGame();
}

// CHECK ANSWER

function checkAnswer(userAnswer, correctAnswer) {

    if (userAnswer === correctAnswer) {

        console.log("Correct!\n");

        score++;

    } else {

        console.log(
            `Wrong! Correct Answer: ${correctAnswer}\n`
        );

    }

}

// 
// END GAME
// 

function endGame() {

    console.log("\n==");
    console.log("         GAME OVER");
    console.log("==");

    console.log(`Final Score: ${score}/${questions.length}`);

    let percentage =
        (score / questions.length) * 100;

    console.log(`Percentage: ${percentage}%`);

    if (percentage >= 80) {

        console.log("Excellent!");

    } else if (percentage >= 60) {

        console.log("Good Job!");

    } else {

        console.log("Keep Practicing!");

    }

    console.log("\nThanks for playing.");
}

// START PROGRAM

startGame();