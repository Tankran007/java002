function removeDup(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDup([1, 0, 1, 0])); // Output: [1, 0]
console.log(removeDup(["The", "big", "cat"])); // Output: ["The", "big", "cat"]
console.log(removeDup(["John", "Taylor", "John"])); // Output: ["John", "Taylor"]
