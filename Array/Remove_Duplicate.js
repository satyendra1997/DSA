//Remove Duplicate from a sorted array
//The original order should not cahnge
//Return number of unique elements
// Input-[0,0,1,1,2,2,3,3,4]-->[0,1,2,3,4]---Length-5
//--------------Brute Force-----//
/*
step1- loop before last element
step2-if current is equal to next delete the next and decrese current position -1


*/

function removeDuplicate(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] === arr[index + 1]) {
      arr.splice(index + 1, 1);
      index--;
    }
  }
  return arr;
}

console.log(removeDuplicate([0, 0, 1, 1, 2, 2, 3, 3, 4])); //[0,1,2,3,4]

//----------------Optimise Method without any js function---//

/*
step1-if array is empty return 0
step2- take a variable i initialize with 0
step2- loop from index 1 to last with j variable
step3-if ith position element is not equal to jth element increment i by one and copy jth value element on that position
step4-return i+1 to get number of unique element

*/

function optimiseRemoveDuplicate(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(optimiseRemoveDuplicate([0, 0, 1, 2, 3, 4, 5, 5, 5, 5])); //6
