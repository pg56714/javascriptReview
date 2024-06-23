# javascriptReview

## Notes

```javascript
3 == "3"; // true

// The types must also be the same.
// Typically, === is used.
3 === "3"; // false
```

core-concepts/module7_functions/4_is_prime/4_is_prime.js

```javascript
// function program concept
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

if (isPrime(5)) {
  console.log("5 isPrime");
}
console.log("5 isPrime", isPrime(5));
console.log("6 isPrime", isPrime(6));
```

core-concepts/module7_functions/9_function_as_value/6_function_as_var.js

```javascript
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
// function as parameter
function printResult(x, y, fn) {
  console.log(`Result: ${fn(x, y)}`);
}

printResult(10, 25, sum);
printResult(10, 25, mult);
```

core-concepts/module7_functions/10_arrow_functions/7_arrow_functions.js

```javascript
function greet1() {
  console.log("hello");
}

const greet = () => {
  console.log("hello");
};

function sum1() {
  return a + b;
}
const sum = (a, b) => a + b;
```

```javascript
function printResult(x, y, fn) {
  console.log(`Result: ${fn(x, y)}`);
}
// arrow function
// Usually used once
printResult(10, 25, (a, b) => a + b);
```

core-concepts/module8_objects/5_destructuring/4_destructuring.js

```javascript
const james = {
  name: "james",
  phone: "0912345678",
  email: "james123@gmail.com",
};

console.log(james.name);
console.log(james.phone);
console.log(james.email);

// normal
// const { name, phone } = james;

// partial
const { name, ...rest } = james;

// printName(name, rest);

// function
function printName({ name }) {
  console.log(name);
}

printName(james);
```

core-concepts/module9_arrays/5_array_methods/3_map_filter.js

```javascript
const arr = [1, 3, 7, 100, 234];
// map
const doubled = arr.map((n) => 2 * n);
const strArr = arr.map((n) => n.toString());
const doubleOdds = arr.map((n) => {
  if (n % 2 !== 0) {
    return n * 2;
  }
  return n;
});
// console.log(doubled);
// console.log(strArr);
// console.log(doubleOdds);
// filter
const odds = arr.filter((n) => n % 2 !== 0);
const greaterThan100 = arr.filter((n) => {
  return n >= 100;
});

console.log(arr);
console.log(odds);
// console.log(greaterThan100);
```

---

todo-list/script.js

```javascript
// object to string
JSON.stringify(todoList);

// string to object
JSON.parse(todoList);
```

## Source

[JavaScript-James-Kool](https://www.youtube.com/watch?v=vDNw0FWL8zw)
