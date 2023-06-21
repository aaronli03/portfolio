const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.addEventListener("mouseleave", hideCursor)
document.addEventListener("mouseenter", showCursor)
function hideCursor(){
  cursor.style.transform = 'scale(0)';
}
function showCursor(){
  cursor.style.transform = 'scale(1)';
}