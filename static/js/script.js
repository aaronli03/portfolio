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
//header
const navLinks = document.querySelectorAll("#nav a");
const sections = document.querySelectorAll("section");
const navSpans = document.querySelectorAll(`#nav span`);

// Add click event listeners to the navigation links
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
      if(!span.classList.contains('active')){
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
      if(!span.classList.contains('focus')){
        span.classList.remove("active");
      }
    });
  });
});
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;
  // Find the currently visible section
  let currentSection = sections[0];
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 1;
    if (sectionTop <= fromTop) {
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

const icon = document.getElementById('icon');
icon.addEventListener('mouseenter', hideCursor)
icon.addEventListener('mouseleave', showCursor)