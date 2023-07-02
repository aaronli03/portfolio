window.addEventListener("resize", setDefaultEyes);
window.addEventListener("load", function () {
  setDefaultEyes();
});

function setDefaultEyes() {
  setTimeout(function () {
    const cat = document.querySelector(".cat");
    const catRect = cat.getBoundingClientRect();
    const leftEye = document.querySelector(".leftEye");
    const rightEye = document.querySelector(".rightEye");
    leftEye.style.left = catRect.left + 65 + "px";
    leftEye.style.top = catRect.top + 37 + "px";
    rightEye.style.left = catRect.left + 79 + "px";
    rightEye.style.top = catRect.top + 38 + "px";
    leftEye.classList.add("show");
    rightEye.classList.add("show");
  }, 1400);
}

document.addEventListener("mousemove", (e) => {
  const cat = document.querySelector(".cat");
  const catRect = cat.getBoundingClientRect();
  const leftEye = document.querySelector(".leftEye");
  const rightEye = document.querySelector(".rightEye");
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  //left eye
  const leftEyeminX = catRect.left + 62;
  const leftEyemaxX = catRect.left + 68;
  const leftEyeminY = catRect.top + 32;
  const leftEyemaxY = catRect.top + 40;
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
  const rightEyeminX = catRect.left + 76;
  const rightEyemaxX = catRect.left + 82;
  const rightEyeminY = catRect.top + 32;
  const rightEyemaxY = catRect.top + 40;
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

function togglePages() {
  const audio = document.getElementById('audio');
  audio.play();
  let timeoutOne = 400;
  let timeoutTwo = 1100
  const loadPage = document.getElementById("loadPage");
  const fullPage = document.getElementById("fullPage");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const transitionPages = document.querySelectorAll(".pageTransition");
  const testingTop = document.querySelector('.topContent div')
const testingBot = document.querySelector('.botContent div')
  for (const page of transitionPages) {
    page.classList.toggle("active");
  }
  if(!loadPage.classList.contains("show")){
    timeoutOne = 1100;
    timeoutTwo = 400;
    audio.pause();
  }
  setTimeout(() =>{
    loadPage.classList.toggle("show");
  }, timeoutOne)
  setTimeout(() => {
    document.body.style.overflow = "visible";
    fullPage.classList.toggle("show");
    header.classList.toggle("show");
    footer.classList.toggle("show");
    testingTop.classList.toggle("showTop");
    testingBot.classList.toggle("showBot");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500)
  }, timeoutTwo)
}
