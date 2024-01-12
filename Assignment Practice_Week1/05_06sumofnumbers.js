console.log("Find the Indices of sum value");
console.log("*****************************");

function findindices(nums) {

    console.log();
    console.log(nums);
    
    for (let i =0; i<nums.length; i++) {
        for (let j=1; j<nums.length; j++) {

            let sum = nums[i] + nums [j]
            

            if(sum == target) {

                console.log(`sum of the values in the indicies ${i} and ${j} is ${target}`);
            
            }


        }
    }

}

const nums = [2,4,7,8,11,14];
const target = 18;
let indexes = findindices(nums);
