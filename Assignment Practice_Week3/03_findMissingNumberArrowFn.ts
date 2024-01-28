let findmissingnum = (arr: number[], arrnum:number): number | string => { 

    for(let i=0; i<=arr.length-1; i++)  {

        arrnum++;

        if (arr[i] !== arrnum) {

            return `Missing number ${arrnum}`;
        }       
    }
    
return -1;

}

const Arrayvalue = [1, 2, 3, 5, 6];
console.log(findmissingnum(Arrayvalue, 0)); 