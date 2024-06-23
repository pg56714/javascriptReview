let obj1 = {
  name: "james"
};

let obj2 = obj1;
obj1 = {
  name: "jack"
};

console.log(obj1);
console.log(obj2);

function changeName(person) {
  person.name = "todd";
}
changeName(obj1);
console.log(obj1);
console.log(obj2);
