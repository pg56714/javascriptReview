function printResult(x, y, fn) {
  console.log(`Result: ${fn(x, y)}`);
}
//arrow function當作參數
printResult(10, 25, (a, b) => a + b);

console.log("123123123");
