/*
1. Create a function named `checkNumberType` that takes a number as a parameter.

2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).

3. Return the corresponding string value for each case.

4. Declare and initialize the variable

5. Call the function and print the result

*/

console.log("Check Number Type");
console.log("*****************");
   

function checkNumberType(Num) {

   console.log("Given Value is " +Num);

   if (Num > 0) {
      
      console.log("Value is greater than 0");
      console.log("Type of " +Num+ " is " +typeof(Num));
      console.log();
   }

   else if (Num < 0) {

      console.log("Value is less than 0");
      console.log("Type of " +Num+ " is " +typeof(Num));
      console.log();
   }

   else {

      console.log("value is 0");
      console.log();
   }
   
}

for (let Num = -1; Num <=1; Num++) {

   checkNumberType(Num);
   
}
