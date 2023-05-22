//Ques -Given an integer array nums, find subarray with the largest sum
//and return it's sum

//Input:[-2,1,-3,4,-1,2,1,-5,4] ------>output :6 [4,-1,2,1]

//------------Brute Force-----------//
/*
step1-take a variable which holds max sum
step2- loop and find all possible sum and if any sum greater than current update max also take start and end and update according to new max sum
step3- return sum and subarray;
*/

function MaxSubArray(arr) {
  let maxSum = arr[0];
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j];
      if (currSum > maxSum) {
        maxSum = currSum;
        start = i;
        end = j;
      }
    }
  }
  return { MaxSum: maxSum, subArray: arr.slice(start, end + 1) };
}

console.log(MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//---------------Optimise algo (Kadane's algo)---------//

/*
step1-take two variable one is sum and second if maxSum and initialize sum=0 and maxSum with first element
step2- 1)loop over array and update sum
       2)if sum is greater than maxSum update maxSum and if sum<0 reset sum=0;

return maxSum

*/

function optimiseSumSubArray(arr) {
  let sum = 0;
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

console.log(optimiseSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
