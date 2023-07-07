function togglePages() {
  let timeoutOne = 400;
  let timeoutTwo = 1100;
  document.getElementById("audio").play();
  document.getElementById("cursor").classList.toggle("difference");
  for (const page of document.querySelectorAll(".pageTransition")) {
    page.classList.toggle("active");
  }
  if (!loadPage.classList.contains("show")) {
    timeoutOne = 1100;
    timeoutTwo = 400;
    audio.pause();
  }
  setTimeout(() => {
    document.getElementById("loadPage").classList.toggle("show");
  }, timeoutOne);
  setTimeout(() => {
    audioToggle.checked = true;
    document.body.classList.toggle("active")
    document.getElementById("fullPage").classList.toggle("show");
    document.querySelector("header").classList.toggle("show");
    document.querySelector("footer").classList.toggle("show");
    document.querySelector(".topContent div").classList.toggle("showTop");
    document.querySelector(".botContent div").classList.toggle("showBot");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, timeoutTwo);
}
