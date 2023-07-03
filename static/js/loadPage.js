function togglePages() {
  const audio = document.getElementById("audio");
  audio.play();
  let timeoutOne = 400;
  let timeoutTwo = 1100;
  const loadPage = document.getElementById("loadPage");
  const fullPage = document.getElementById("fullPage");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const transitionPages = document.querySelectorAll(".pageTransition");
  const testingTop = document.querySelector(".topContent div");
  const testingBot = document.querySelector(".botContent div");
  const cursor = document.getElementById("cursor");
  console.log(cursor.style.mixBlendMode);
  cursor.classList.toggle("difference");
  for (const page of transitionPages) {
    page.classList.toggle("active");
  }
  if (!loadPage.classList.contains("show")) {
    timeoutOne = 1100;
    timeoutTwo = 400;
    audio.pause();
  }
  setTimeout(() => {
    loadPage.classList.toggle("show");
  }, timeoutOne);
  setTimeout(() => {
    document.body.style.overflow = "visible";
    fullPage.classList.toggle("show");
    header.classList.toggle("show");
    footer.classList.toggle("show");
    testingTop.classList.toggle("showTop");
    testingBot.classList.toggle("showBot");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, timeoutTwo);
}
