let obj1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steven", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ];
  let obj2 = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steven", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ];
  function getBudgete(obj1, obj2) {
    let bud = [];
  
    for (let i = 0; i < obj1.length; i++) {
      bud[i] = obj1[i].budget + obj2[i].budget;
    }
  
    for (let i = 0; i < obj1.length; i++) {
      console.log(obj1[i].name +" : "+ obj1[i].age + " : " + bud[i]);
    }
  }
  getBudgete(obj1, obj2);