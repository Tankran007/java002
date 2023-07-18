function dividesEvenly (num1, num2){
    if(num1%num2 == 0)
    {
        return true; 
    }
    else
    {return false ;
    };
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));


// % คือ mod หารเอาแต่เศษ , ส่วน == คือ การตรวจสอบว่ามีค่าเท่ากันไหม ถ้าเท่ากันจะได้ ture ไม่เท่าได้ false 
// อย่างในข้อนี้ เอา 98%7 จะไม่เหลือเศษ ฉนั้นจะได้ ture แต่ถ้า85%4 จะเหลือเศษ แล้วจะได้ false
