console.log("Find occurance");
console.log("**************");

function occurance(nums) {

    let occ = 0;


    for(let i=0; i<nums.length; i++) {
        if (nums[i] == k) {

            occ++;
        }
    }
    
    console.log(`Occurance of ${k} is ${occ}`);
}

const nums = [2,4,5,2,1,2];
const k = 2
occurance(nums);
