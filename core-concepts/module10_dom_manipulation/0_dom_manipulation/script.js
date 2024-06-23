const btn = document.getElementById("button");

button.addEventListener("click", (e) => {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  const container = document.querySelector(".container");
  container.appendChild(newBox);
});
