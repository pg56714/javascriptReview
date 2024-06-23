const 布林值1 = true;
const 布林值2 = false;

if (布林值1) {
  console.log("1");
} else if (布林值2) {
  console.log("2");
}

if (布林值1) {
  console.log("1");
} else {
  if (布林值2) {
    console.log("2");
  }
}
