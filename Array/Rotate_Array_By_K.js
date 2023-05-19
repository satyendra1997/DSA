// Rotate Array by k
//k will be non negative
//[1,2,3,4,5,6] k=3 //[4,5,6,1,2,3]

//----------Brute Force----//
//Algo
/*
step-1 check if k is greater than lenght of array take remainder because if k=length original array will be unchanged

step-2 Delete the value from lenght-k to length

step-3 now push the deleted element in starting

*/

function rotate(arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }
  let deletedElement = arr.splice(size - k, size);
  arr.unshift(...deletedElement);
  return arr;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]

//-----------------Optimised Approach-----//
/*
step1-check if k is greater than length take module value
step-2 -reverse whole array
step-3- reverse 0 to k-1 value
step-4  reverse k to length-1 
*/

function optimisedRotate(arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }

  reverse(arr, 0, size - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, size - 1);
  return arr;
}
function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

console.log(optimisedRotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
