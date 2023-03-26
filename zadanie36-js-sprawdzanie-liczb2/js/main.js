let num1 = 0;
let num2 = 10;
const wynik = 20;

function test(num1, num2) {
  return (
    num1 == wynik ||
    num2 == wynik ||
    num1 + num2 == wynik ||
    num1 + num2 < wynik
  );
}

console.log(test(num1, num2));
