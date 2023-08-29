function numberSplite(num1){
    return [Math.floor(num1/2),Math.ceil(num1/2)];
}
console.log(numberSplite(4));  //->[ 2, 2 ]
console.log(numberSplite(10))  //->[ 5, 5 ]
console.log(numberSplite(11)); //->[5, 6 ]
console.log(numberSplite(-9)); //->[ -5, -4 ] 

