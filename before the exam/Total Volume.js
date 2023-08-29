function totalVolum(...numArrays) {
    let totalVolume = 0;
  
    for (const dimensions of numArrays) {
      if (dimensions.length === 3) {
        const volume = dimensions[0] * dimensions[1] * dimensions[2];
        totalVolume += volume;
      }
    }
  
    return totalVolume;
  }
  
  console.log(totalVolum([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // Output: 63
  console.log(totalVolum([2, 2, 2], [2, 1, 1]));                    // Output: 10
  console.log(totalVolum([1, 1, 1]));                               // Output: 1
  