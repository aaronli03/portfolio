window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.addEventListener("mouseleave", hideCursor);
document.addEventListener("mouseenter", showCursor);
function hideCursor() {
  cursor.style.transform = "scale(0)";
}
function showCursor() {
  cursor.style.transform = "scale(1) translate(-50%, -50%)";
}
window.addEventListener("resize", reCalculateSize);
window.addEventListener("load", reCalculateSize);


function reCalculateSize(){
  const fontSize = window.innerWidth / 120;
  document.documentElement.style.fontSize = `${fontSize}px`;
}

const navLinks = document.querySelectorAll("#nav a");
const sections = document.querySelectorAll("section");
const navSpans = document.querySelectorAll(`#nav span`);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
  link.addEventListener("mouseenter", (e) => {
    const currentLinkId = link.getAttribute("href");
    const currentText = document.querySelectorAll(
      `#nav a[href="${currentLinkId}"] span`
    );
    currentText.forEach((span) => {
      if (!span.classList.contains("active")) {
        span.classList.add("active");
      }
    });
  });
  link.addEventListener("mouseleave", (e) => {
    const currentLinkId = link.getAttribute("href");
    const currentText = document.querySelectorAll(
      `#nav a[href="${currentLinkId}"] span`
    );
    currentText.forEach((span) => {
      if (!span.classList.contains("focus")) {
        span.classList.remove("active");
      }
    });
  });
});
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + window.innerHeight;
  let currentSection = sections[0];
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBot = sectionTop + section.offsetHeight;
    if (fromTop > sectionTop && fromTop <= sectionBot) {
      currentSection = section;
    }
  });
  navSpans.forEach((span) => {
    span.classList.remove("active");
    span.classList.remove("focus");
  });
  const currentLinkId = currentSection.getAttribute("id");
  const currentText = document.querySelectorAll(
    `#nav a[href="#${currentLinkId}"] span`
  );
  currentText.forEach((span) => {
    span.classList.add("active");
    span.classList.add("focus");
  });
});

const cursorContent = document.querySelectorAll(".cursorContent");
cursorContent.forEach((element) => {
  element.addEventListener("mouseenter", hideCursor);
  element.addEventListener("mouseleave", showCursor);
});
