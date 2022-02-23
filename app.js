const colors = ["green", "red", "rgba(133,122,200)", "#f15025","white","yellow"];

const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let theColor = colors[randomColor()]
  document.body.style.backgroundColor = theColor;
  color.textContent = theColor;
  color.style.color = theColor;
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
