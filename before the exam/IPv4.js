function Validation(ipaddress) {
  const ipSegments = ipaddress.split('.');
  
  // Check if there are exactly four segments
  if (ipSegments.length !== 4) {
    return false;
  }
  
  // Check if each segment is a valid number between 0 and 255
  for (const segment of ipSegments) {
    const num = parseInt(segment, 10);
    if (isNaN(num) || num < 0 || num > 255 || (segment.length > 1 && segment[0] === '0')) {
      return false;
    }
  }
  
  return true;
}

console.log(Validation("1.2.3.4"));      // true
console.log(Validation("1.2.3"));        // false
console.log(Validation("1.2.3.4.5"));    // false
console.log(Validation("123.45.67.89")); // true
console.log(Validation("123.456.78.90")); // false
console.log(Validation("123.045.067.089")); // false
