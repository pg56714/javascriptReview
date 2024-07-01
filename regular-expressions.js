// const text = `
// Contact us at support@example.com or admin@domain.org.
// 123@yahoo.com
// 123.456@bb.cc
// asd@gmail.com
// `;

// const regax = /[\w.-]+@[\w.-]+\.[a-zA-Z]{2,63}/g;
// const matches = text.match(regax);
// console.log(matches);

const text = `
2024-06-08
2024-12-25
2024-01-01
`;

const regax = /(\d{4})-(\d{2})-(\d{2})/g;
const newText = text.replace(regax, "$3/$2/$1");
console.log(newText);
