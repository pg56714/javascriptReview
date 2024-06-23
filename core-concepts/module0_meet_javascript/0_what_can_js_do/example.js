const body = document.getElementsByTagName("body")[0];

const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = handleClick;
button.style =
  "background-color: blue; color: white; margin: 10px; border: none; border-radius: 5px; padding: 10px;";

body.appendChild(button);

function handleClick() {
  alert("你按了按鈕");
}
