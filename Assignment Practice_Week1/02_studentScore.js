/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.
2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.
3. Declare and initialize the variable
4. Call the function and print the result
*/

console.log("Students Grade using Switch Case");
console.log("********************************");

function calculateGrade(Marks) {
   let grade;

   switch (true) {

       case Marks >= 90:
           grade = 'O';
           break;
       case Marks >= 80:
           grade = 'A';
           break;
       case Marks >= 70:
           grade = 'B';
           break;
       case Marks >= 60:
           grade = 'C';
           break;
      case Marks >= 50:
            grade = 'D';
            break;
       default:
           grade = 'F';
   }

   return "Your Grade is " +grade;
}

let Marks = 60;
console.log(calculateGrade(Marks));