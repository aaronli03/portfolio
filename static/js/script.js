const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.addEventListener("mouseleave", (e) =>{
  cursor.style.transform = 'scale(0)';
})
document.addEventListener("mouseenter", (e) =>{
  cursor.style.transform = 'scale(1)';
})