console.log("Move Zeros");
console.log("**********");

let nums = [0,1,0,3,12];
//let nums = [0];
//let nums = [10, 0, 20, 's',0, '$', 0, 23, 'Alpha']

let newarray =[];

console.log("Original Array: " +nums);
for (let index=0; index<=nums.length-1; index++) {
    if(nums[index]!==0) {
        newarray.push(nums[index])
    }
}
console.log("New array without zero: " +newarray);

let noOfZeros = nums.length - newarray.length;

console.log("No. of zeros in original array: " +noOfZeros);

for(let i=0; i<noOfZeros; i++) {

    newarray.push(0);
}

console.log("New Array: "+newarray);
    