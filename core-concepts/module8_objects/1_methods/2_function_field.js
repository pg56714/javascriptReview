const james = {
  name: "james",
  phone: "091234566",
  email: "james123@gmail.com",
  greet: () => {
    console.log(`Hello, I'm ${james.name}`);
  },
  greet2: function () {
    console.log(`Hello, I'm ${this.name}`);
  }
};
// call functions
james.greet();
james.greet2();
