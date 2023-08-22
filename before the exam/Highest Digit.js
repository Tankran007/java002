function HighestDigit(num) {
    let highestDigit = 0;
    
    while (num > 0) {
        const digit = num % 10;
        highestDigit = Math.max(highestDigit, digit);
        num = Math.floor(num / 10);
    }
    
    return highestDigit;
}

console.log(HighestDigit(379));   // Output: 9
console.log(HighestDigit(2));     // Output: 2
console.log(HighestDigit(37701)); // Output: 7
