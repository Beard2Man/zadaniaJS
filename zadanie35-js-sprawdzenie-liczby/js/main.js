const low = 100;
const high = 200;
let num = 190;

function test(num, low, high) {
  if (num > low && num < high) {
    return true;
  }
  return false;
}
console.log(test(num, low, high));
