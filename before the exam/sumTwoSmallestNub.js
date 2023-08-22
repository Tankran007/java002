function sumTwoSmallestNum(num){
    let show = 0 ;
        num.sort(function(a,b){return a-b});
        for(let i = 0 ; i < num.length ; i++){
            if(num[i] > 0){
                show += num[i] + num[i+1];
            break;
            }
    }
    return show;
}

console.log(sumTwoSmallestNum([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNum([10, 343445353, 3453545353453]));
console.log(sumTwoSmallestNum([2, 9, 6, -1]));
console.log(sumTwoSmallestNum([879, 953, 694, -847, 221, -91, -723, 791, -587]));
console.log(sumTwoSmallestNum([3683, 2902, 395, -475, 1617, -2385]));