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
