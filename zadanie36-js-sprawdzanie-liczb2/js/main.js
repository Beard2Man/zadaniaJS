let x = 0;
let y = 10;
const wynik = 20;

function test(num1, num2) {
  return x == wynik || y == wynik || x + y == wynik || x + y < wynik;
}

console.log(test(x, y));
