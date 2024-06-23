function sum(a, b) {
  return a + b;
}
function mult(a, b) {
  return a * b;
}

// function as variable
console.log(sum);
console.log(sum(2, 3));
console.log(sum(2, 3) * 2);
console.log(sum(2, 3) + 2);
//function as parameter
function printResult(x, y, fn) {
  console.log(`Result: ${fn(x, y)}`);
}

printResult(10, 25, sum);
printResult(10, 25, mult);
