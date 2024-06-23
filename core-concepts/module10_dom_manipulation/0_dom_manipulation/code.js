// get
const box1 = document.getElementById("box1");
box1.style.backgroundColor = "red";
box1.classList.toggle("enabled");
// explore the properties!!

// create
const box4 = document.createElement("div");
box4.classList.add("box");
const container = document.querySelector(".container");
container.appendChild(box4);
// remove
container.removeChild(box4);
// addEventListener

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  console.log("hello");
});

JSON.stringify();
JSON.parse();
