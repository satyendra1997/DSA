//Find the second largest number from array
//input -[12,34,56,23,57,89] -output 57
//input -[12] --1 (atleast 2 number should there)

//----------------Brute force algo-------//
/*
step1- first we will make unique value array otherwise it will cause issue e.g [1,2,3,3,5,5] in this 3 should be output but if we simple sort and take second from last it will be 5 to avoid that we will be making unique value array.

step2- sort in dec order 

step3 - take index 1 value 

*/
function secondLarge(arr) {
  const uniqueArray = Array.from(new Set(arr));
  const sort = uniqueArray.sort((a, b) => b - a);
  if (sort.length >= 2) {
    return sort[1];
  }
  return -1;
}
console.log(secondLarge([12, 34, 56, 23, 57, 89])); //57

//Time complexity  O(nlogn)

//---------------optimised approach-----//
//Algo
/*
step1- Take largest and secondLargest least possible value
step2- Iterate over array if found greater value than largest update Secondlargest with the cureent largest value and update largest with new value
step3-  chech if any value is not equal to largest but greater than second largest update second largest with new



*/

function OptimiseSecondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLarge = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLarge) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}

console.log(OptimiseSecondLargest([1, 2, 2])); //1
//Time Complexity O(n)
