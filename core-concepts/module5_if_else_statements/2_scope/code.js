const globalVariable = "全域變數";

if (true) {
  const localVariable = "區域變數";
  console.log("globalVariable", globalVariable);
  console.log("localVariable", localVariable);
  if (true) {
    const innerVariable = "內部變數";
    console.log("globalVariable", globalVariable);
    console.log("localVariable", localVariable);
    console.log("innerVariable", innerVariable);
  }
  console.log("innerVariable", innerVariable);
}
