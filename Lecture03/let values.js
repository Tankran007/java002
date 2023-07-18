let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Mars'];
let values3 = ['Mars', 9, 'Apple'];

for(let v1 of values1){
    //console.log(v1);

    for(let v2 of values2){
        //console.log(v2);
        if (v1 === v2){
            console.log('val1, val2 has',v1)
        }
        
        
    }
    for(let v3 of values3){
       // console.log(v3);
        if (v1 === v3){
            console.log('val1, val3 has',v1)
        } 
    }    
}





for(let v2 of values2){
    //console.log(v1);

    for(let v3 of values3){
        //console.log(v2);
        if (v2 === v3){
            console.log('val2, val3 has',v3)
        }
    }
}