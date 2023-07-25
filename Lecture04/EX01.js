function tuckIn(arr1, arr2){

    arr1.splice(1, 0.6, ...arr2);
    return arr1;
  }
  
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(tuckIn([5, 15, 150, 170], [45, 75, 35]));

