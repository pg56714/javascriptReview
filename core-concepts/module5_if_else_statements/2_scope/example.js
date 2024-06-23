const globalVariable = "global var";

if (true) {
  const localVariable = "local var";
  console.log("globalVariable", globalVariable);
  console.log("localVariable", localVariable);
  if (true) {
    const innerVariable = "inner var";
    console.log("globalVariable", globalVariable);
    console.log("localVariable", localVariable);
    console.log("innerVariable", innerVariable);
  }
}

console.log("globalVariable", globalVariable);
console.log("localVariable", localVariable);
console.log("innerVariable", innerVariable);
