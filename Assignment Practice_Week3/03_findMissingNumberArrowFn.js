var findmissingnum = function (arr, arrnum) {
    for (var i = 0; i <= arr.length - 1; i++) {
        arrnum++;
        if (arr[i] !== arrnum) {
            return "Missing number ".concat(arrnum);
        }
    }
    return -1;
};
var Arrayvalue = [1, 2, 3, 5, 6];
console.log(findmissingnum(Arrayvalue, 0));
