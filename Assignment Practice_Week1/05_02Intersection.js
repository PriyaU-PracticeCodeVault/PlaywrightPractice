console.log("Array Intersection");
console.log("**********");

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];

const newarr = nums1.filter(value => nums2.includes(value));

console.log(newarr);

console.log