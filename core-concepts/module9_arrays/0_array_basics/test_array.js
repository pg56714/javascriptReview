const arr = [];
const arr2 = [1, 2, 3];
const arr3 = ["1", "2", "3"];
const arr4 = [1, "2", true, [], { name: "james" }];

console.log(typeof arr);

//indexing
console.log(arr2[0]);
console.log(arr[-1]);
console.log(arr[100]);

arr2[0] = 100;
console.log(arr2);
