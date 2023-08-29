let obj = ([
    {name : "John", age : 21, budget : 23000}, 
    {name : "Steven", age : 32, budget : 40000}, 
    {name : "Martin", age : 16, budget : 2700}
]);
let obj2 = ([
    {name : "John", age : 21, budget : 29000}, 
    {name : "Steven", age : 32, budget : 32000}, 
    {name : "Martin", age : 16, budget : 1600}
]);
function getBudgete(show){
    let show2 = 0;
    for(let i = 0 ; i < show.length ; i++){
        show2 += show[i].budget;
    }
    return show2
}
console.log(getBudgete(obj));
console.log(getBudgete(obj2));