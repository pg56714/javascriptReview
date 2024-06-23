// const n = 7;
// let isPrime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     console.log("不是質數");
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("是質數");
// }

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; // 提早return
    }
  }
  return true;
}

if (isPrime(5)) {
  console.log("5是質數");
}
console.log("5是質數", isPrime(5));
console.log("6是質數", isPrime(6));
