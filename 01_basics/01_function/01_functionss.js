function sayMyName() { //function - keyword , sayMyName- function name
    console.log("h");
    console.log("i"); //{ inside this braces we write scope of this function}
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

sayMyName() // function reference

function addTwoNumbers(number1, number2) // when we make function definition we take input as a parameter
{
    console.log(number1 + number2);
}
addTwoNumbers(6, 7) // when we call the function we give as an arguments

function addTwoNumbers2(number4, number3)
{
    let result = number4 + number3 
     return result
   // return number4 + number3
}
 const result = addTwoNumbers2(8, 7)
 console.log("Result:", result );

 function loginUserMessage(username){
         return `${username} just loggedIn`
 }
 console.log(loginUserMessage("prabhat"));
