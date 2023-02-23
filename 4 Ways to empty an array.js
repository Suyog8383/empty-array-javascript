// Method 1
let arr1 = [1, 2, 3, 4];
arr1 = [];
console.log("@SN ", arr1);

// Method 2
let arr2 = [1, 2, 3, 4];
arr2.length = 0;
console.log("@SN ", arr2);

// Method 3
let arr3 = [1, 2, 3, 4];
arr3.splice(0, arr3.length);
console.log("@SN ", arr3);

// Method 4
let arr4 = [1, 2, 3, 4];
while (arr4.length > 0) {
  arr4.pop();
}
console.log("@SN ", arr4);
