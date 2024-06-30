function makeCounter() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1();
counter1();

counter2();
