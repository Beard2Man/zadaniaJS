let num1 = 20;
let num2 = 10;

function multi(num1, num2) {
  let result = num1 * num2;
  return result;
}
if (multi(num1, num2) > 0) console.log("Wynik z mnożenia", +multi(num1, num2));
if (multi(num1, num2) < 0) console.log("Wynik jest nieprawidłowy");

function addition(num1, num2) {
  let result = num1 + num2;
  return result;
}
if (addition(num1, num2) > 0)
  console.log("Wynik z dodawania to", +addition(num1, num2));
if (addition(num1, num2) < 0) console.log("Wynik jest nieprawidłowy");

function subtraction(num1, num2) {
  let result = num1 - num2;
  return result;
}
if (subtraction(num1, num2) > 0)
  console.log("Wynik z odejmowania to", +subtraction(num1, num2));

if (subtraction(num1, num2) < 0) console.log("Wynik jest nieprawidłowy");

// console.log("Wynik z mrożenia to", +multi(num1, num2));
// console.log("Wynik z dodawania to", +addition(num1, num2));
// console.log("Wynik z odejmowania to", +subtraction(num1, num2));
