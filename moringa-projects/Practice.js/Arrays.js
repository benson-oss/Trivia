//diclaration function
function printName(name){
    console.log(name);
}
printName("george");

//function expression
//function assigned to a varible
const calculateTotal=function(price, quantity){
    return price*quantity;
};
console.log(calculateTotal(43,2));

//arrow function
const printName1=()=>{      ///first method
    //statement
    return "branis";
}
console.log(printName1());

const printname=()=>"jilly";  //method 2
    console.log(printname());
    
//IIFE
(function(){
    console.log("application started");

})

//callback functions
//A callback function is a function passed into another function as an argument.
function processPayment(anotherfunction){
    //payment process stsrted
    console.log("payment process stsrted");
    anotherfunction();

}
function logPaymentSuccessful(){
    console.log("payment successiful");

}
processPayment(logPaymentSuccessful);

//Anonimous function
const greetMe=function (greetings){
console.log(greetings)
}
greetMe("greetMe")

//high Order functions
//functions that accepts other functions as an argument and returning the function as results
//function that works with other functions

const display=document.getElementById("display");


function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
display.value+="";
}
function calculate(){
    try{
display.value+=eval(display.value);
}
catch(error){
    display.value+="error";
};
}






















