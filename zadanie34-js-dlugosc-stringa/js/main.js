let world1 = "Uwielbiam JavaScript";
let world2 = "Jestem świetnym programistą";

function multiply(vol1, vol2) {
  // let result = num1 * num2;
  // return result;

  if (vol1.length > vol2.length) {
    return vol1;
  } else {
    return vol2;
  }
}
// console.log(vol1.length);
console.log(multiply(world1, world2));
