function missingnum(arr: number[]): number {

   let arrnum = 1;

   for(let i=0; i<arr.length-1; i++) {

        let nextvalue : number = arrnum;
        arrnum++;

    if(arr[i] !== nextvalue) {

        console.log('Please find the Missing Number below: ');
         return nextvalue;     
    }

 } 
   
   return -1;
        
}

const myArray = [1, 2, 3, 5, 6];
console.log(missingnum(myArray)); 
