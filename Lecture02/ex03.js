function numberSplite(num1){
    return [Math.floor(num1/2),Math.ceil(num1/2)];
}
console.log(numberSplite(4));
console.log(numberSplite(10));
console.log(numberSplite(11));
console.log(numberSplite(-9));



//Math.floor ปัดลง ,Math.ceil ปัดขึ้น Math.round ปัดเศษทิ้ง