let str = "PoNdzaNaRak";
let uppercaseCount = 0;
let lowercaseCount = 0;
let uppercaseLetters = [];
let lowercaseLetters = [];

function CountLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/[A-Z]/)) {
      uppercaseCount++;
      if (!uppercaseLetters.includes(char)) {
        uppercaseLetters.push(char);
      }
    } else if (char.match(/[a-z]/)) {
      lowercaseCount++;
      if (!lowercaseLetters.includes(char)) {
        lowercaseLetters.push(char);
      }
    }
  }

  console.log("upper : " + uppercaseCount);
  console.log("all upper:", uppercaseLetters.join(", "));
  console.log("lower : " + lowercaseCount);
  console.log("all lower:", lowercaseLetters.join(", "));
}

CountLetter(str);