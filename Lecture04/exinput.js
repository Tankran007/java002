const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var name, weight, height, bmi;

rl.question('Enter your name:', (answer) => {
    name = answer;
    rl.question('Enter your wight (in kg): ', (answer)=> {
        weight = answer;
        rl.question('Enter your hight (in m): ', (answer)=> {
            height = answer;
            bmi = weight / (height * height); //((height*0.01) * (height*0.01)) ถ้าจะใส่แบบไม่แปลงเป็นเมตร

            console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
});
