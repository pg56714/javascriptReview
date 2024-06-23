const obj1 = {
  name: "james"
};
const obj2 = obj1;
obj2.name = "jack";

console.log(obj1);
console.log(obj2);

function changeName(person) {
  person.name = "todd";
}

changeName(obj1);

console.log(obj1);
console.log(obj2);
