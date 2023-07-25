function filterArray(arr1){
    arr1.pop("")
    return arr1;
  }

console.log(filterArray([1, 2, "a", ]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
