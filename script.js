const cursor = document.getElementById("cursor");
const loadButton = document.getElementById("loadButton");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.querySelector(".cat");
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const andleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + andleDeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
loadButton.addEventListener("mouseover", hideCursor);
loadButton.addEventListener("mouseout", showCursor);
function hideCursor() {
  cursor.style.visibility = "hidden";
}
function showCursor() {
  cursor.style.visibility = "visible";
}
