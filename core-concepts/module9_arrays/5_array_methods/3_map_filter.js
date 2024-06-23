const arr = [1, 3, 7, 100, 234];
// map
const doubled = arr.map((n) => 2 * n);
const strArr = arr.map((n) => n.toString());
const doubleOdds = arr.map((n) => {
  if (n % 2 !== 0) {
    return n * 2;
  }
  return n;
});
// console.log(doubled);
// console.log(strArr);
// console.log(doubleOdds);
//filter
const odds = arr.filter((n) => n % 2 !== 0);
const greaterThan100 = arr.filter((n) => {
  return n >= 100;
});

console.log(arr);
console.log(odds);
// console.log(greaterThan100);
