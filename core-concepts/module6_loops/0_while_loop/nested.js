let i = 0;
let j = 0;

while (i < 10) {
  while (j < 10) {
    console.log("i * j", i * j);
    break;
    j++;
  }
  break;
  j = 0;
  i++;
}
