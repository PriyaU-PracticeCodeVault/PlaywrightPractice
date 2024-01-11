/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  
2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even
3. Declare and initialize the variable  
4. Call the function and print the result
*/

console.log("Verify odd and even number");
console.log("**************************");

function checkOddOrEven(Value) {

    if (Value%2==0) {
        
        return Value + " is Even Number"
    }

    else {
        return Value + " is Odd Number"
    }
    
}

for (let Value=0; Value<=20; Value++) {

    console.log(checkOddOrEven(Value));
    console.log();
    
}

