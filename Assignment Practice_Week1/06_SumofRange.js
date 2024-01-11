/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

console.log("Sum of 1 to 10");
console.log("**************");


function SumofConsecutiveNumbers(range) {

   let Answer = 0;
   let addedvalues = [];
   
   for(let value = 0; value <= range; value++) {   // console.log(value);   

      let sum = Answer + value;
      Answer = sum;
      addedvalues.push(Answer);
      
      }

      console.log(addedvalues);
      console.log(`Sum of 0 to ${range} is ` +addedvalues[addedvalues.length-1]);

}

let range = 25;
SumofConsecutiveNumbers(range);



