function hasTargetSum(array, target) {
  // Write your algorithm here
  const hashTable = {};
  
  for (let i = 0 ; i < array.length ; ++i) {
    const difference = target - array[i];
    
    if (hashTable[array[i]] !== undefined) {
      return true;
    }
    
    hashTable[difference] = i;
  }
  
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the algorithm used is O(n) in the worst case i.e. when the hasTargetSum finds that the array has no two elements with
  the target sum.

  The memory complexity of the algorithm used is 1 variable + 1 hash table with n key-value pairs therefore O(n + 1). Ignoring the constants gives
  O(n).
*/

/* 
  Add your pseudocode here
  1. Run through each element sequentially, taking the difference between that element and the target sum.
  2. For each element, check if a number/element equal to the difference obtained in step 1 above is present in the array.
  3. If the difference is present, return true, else continue to the next element.
  4. If the iteration is completed without any element satisfying step 3, then return false.
*/

/*
  Add written explanation of your solution here
  An empty hashtable is defined at the beginning of the function which will be used to hash the difference between each array element
  and the target sum. 
  The loop defined runs through each element to the end of the array. A difference is calculated for an element and the hash table is referenced
  using the current element(array[i]) to check if the element is equal to any difference that has been hashed in the hashTable from a previous iteration. 
  If it is equal, then there will be a value for hashTable[array[i]] and it will not be undefined, hence the hasTargetSum will return true. 
  If it is not equal, then hashTable[array[i]] will be undefined meaning that no the current element is not equal to any previously obtained difference. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
