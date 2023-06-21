window.addEventListener("resize", setDefaultEyes);
window.addEventListener("load", setDefaultEyes);

function setDefaultEyes() {
  const cat = document.querySelector(".cat");
  const catRect = cat.getBoundingClientRect();
  const leftEye = document.querySelector(".leftEye");
  const rightEye = document.querySelector(".rightEye");
  leftEye.style.left = catRect.left + 109 + "px";
  leftEye.style.top = catRect.top + 61 + "px";
  rightEye.style.left = catRect.left + 132 + "px";
  rightEye.style.top = catRect.top + 62 + "px";
}

document.addEventListener("mousemove", (e) => {
  const cat = document.querySelector(".cat");

  const catRect = cat.getBoundingClientRect();
  const leftEye = document.querySelector(".leftEye");
  const rightEye = document.querySelector(".rightEye");
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  //left eye
  const leftEyeminX = catRect.left + 104;
  const leftEyemaxX = catRect.left + 114;
  const leftEyeminY = catRect.top + 56;
  const leftEyemaxY = catRect.top + 67;
  const leftEyerestrictedX = Math.min(
    Math.max(mouseX, leftEyeminX),
    leftEyemaxX
  );
  const leftEyerestrictedY = Math.min(
    Math.max(mouseY, leftEyeminY),
    leftEyemaxY
  );
  leftEye.style.left = leftEyerestrictedX + "px";
  leftEye.style.top = leftEyerestrictedY + "px";
  //right eye
  const rightEyeminX = catRect.left + 127;
  const rightEyemaxX = catRect.left + 137;
  const rightEyeminY = catRect.top + 56;
  const rightEyemaxY = catRect.top + 67;
  const rightEyerestrictedX = Math.min(
    Math.max(mouseX, rightEyeminX),
    rightEyemaxX
  );
  const rightEyerestrictedY = Math.min(
    Math.max(mouseY, rightEyeminY),
    rightEyemaxY
  );
  rightEye.style.left = rightEyerestrictedX + "px";
  rightEye.style.top = rightEyerestrictedY + "px";
});

//meet me button
const loadButton = document.getElementById("loadButton");
loadButton.addEventListener("mouseover", hideCursor);
loadButton.addEventListener("mouseout", showCursor);
function hideCursor() {
  cursor.style.visibility = "hidden";
}
function showCursor() {
  cursor.style.visibility = "visible";
}
function handleLoadButton() {
  console.log("hit");
  document.body.style.overflow = "visible";
  const loadPage = document.getElementById("loadPage");
  loadPage.style.visibility = "hidden";
  loadPage.style.zIndex = -999;
}
