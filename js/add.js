let x1 = Number(prompt("x1 neche?"));
let x2 = Number(prompt("x2 dneche?"));
let y1 = Number(prompt("y1 neche?"));
let y2 = Number(prompt("y2 neche?"));
let cx = Number(prompt("cx?"));
let cy = Number(prompt("cy?"));
console.log(typeof x1);

if (x2 - x1 < 0 && y2 - y1 > 0) {
  let x = alert(`sahesi: ${(x2 - x1) * -1 * (y2 - y1)} `);
} else if (y2 - y1 < 0 && x2 - x1 > 0) {
  let y = alert(`sahesi: ${(x2 - x1) * ((y2 - y1) * -1)} `);
} else {
  let z = alert(`sahesi: ${(x2 - x1) * (y2 - y1)}`);
}
if (
  x2 - x1 > 0 &&
  y2 - y1 > 0 &&
  cx >= x1 &&
  cx <= x2 &&
  cy >= y1 &&
  cy <= y2
) {
  console.log(alert("yes"));
} else if (
  x2 - x1 < 0 &&
  y2 - y1 > 0 &&
  cx <= x1 &&
  cx >= x2 &&
  cy >= y1 &&
  cy <= y2
) {
  console.log(alert("yes"));
} else if (
  x2 - x1 > 0 &&
  y2 - y1 < 0 &&
  cx >= x1 &&
  cx <= x2 &&
  cy <= y1 &&
  cy >= y2
) {
  console.log(alert("yes"));
} else if (
  x2 - x1 < 0 &&
  y2 - y1 < 0 &&
  cx <= x1 &&
  cx >= x2 &&
  cy <= y1 &&
  cy >= y2
) {
  console.log(alert("yes"));
} else {
  console.log(alert("Not"));
}

// let z1 = prompt("z1 neche?");
// let z2 = prompt("z2 neche?");
// alert(`kubub sahesi:${(x2-x1)*(y2-y1)*(z2-z1)}`);

//uchbucaqin sahesi:
//  let x1 = prompt("x1 qiymeti:");
//  let x2 = prompt("x2 qiymeti:");
//  let y = prompt("y qiymeti:");
//  alert(`uchnucaqin sahesi: ${((x2-x1)*y)/2}`);

//silindirin sahesi:
// let r = prompt("r?");
// let h = prompt("h?");
// let p = 3.14;
// alert(`slindirin sahesi: ${r**2*p*h}, chevrenin sahesi:${r**2*p}`);

// faiz kredit:
// let x = Number(prompt("lazim olan mebleg?"));
// let y = Number( prompt("neche ayliq?"));
// let z = Number(prompt("neche faiz ile?"));
// alert(`total:${((x*z)/100)+x}, ayliq:${(((x*z)/100)+x)/y}`);
