function missingnum(arr) {
    var arrnum = 1;
    var arr1 = [];
    for (var i = 0; i < arr.length - 1; i++) {
        var nextvalue = arrnum;
        arrnum++;
        if (arr[i] !== nextvalue) {
            console.log('Please find the Missing Number below: ');
            arr1.push(nextvalue);
            console.log(arr1);
        }
    }
    return -1;
}
var myArray = [1, 2, 3, 6, 9];
console.log(missingnum(myArray));
