const arr = [1, 2, 3, 4, 5, 6, 7, "123123"];
// for
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
  if (arr[i] === 4) {
    break;
  }
}
// for of
// for (const n of arr) {
//   console.log(n);
//   if (n === 4) {
//     break;
//   }
// }
// forEach
// arr.forEach((n) => {
//   console.log(n);
//   if (n === 4) {
//     break;
//   }
// });
