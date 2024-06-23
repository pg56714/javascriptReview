const 體重 = 50;
const 身高 = 160;
const BMI = 體重 / (身高 / 100) ** 2;

if (BMI < 18.5) {
  console.log("過輕");
} else if (BMI < 24) {
  console.log("正常");
} else {
  console.log("過重");
}
