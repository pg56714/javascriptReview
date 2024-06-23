const str = "1231243k213123k";

let i = 0;

while (i < str.length) {
  if (str[i] === "k") {
    console.log("找到k了");
    break;
  }
  i++;
}
