document.getElementById("btnBackgroundColor").addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = document.getElementById("backgroundColor").value;
}
