function removeDup(arr){
    return arr.filter((item,
        index) => arr.indexof(item) === index);

}

console.log(removeDup(1,0,1,0));
console.log(removeDup(["The", "big", "cat"]));
console.log(removeDup(["John", "Taylor", "John"]));