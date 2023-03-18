let num1 = 5;
let num2 = 10;

function multi(num1, num2) {
  let result = num1 * num2;
  return result;
}

function addition(num1, num2) {
  let result = num1 + num2;
  return result;
}

function subtraction(num1, num2) {
  let result = num1 - num2;
  return result;
}
console.log("Wynik z mrożenia to", +multi(num1, num2));
console.log("Wynik z dodawania to", +addition(num1, num2));
console.log("Wynik z odejmowania to", +subtraction(num1, num2));
