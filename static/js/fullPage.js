gsap.registerPlugin(ScrollTrigger);

const audio = document.querySelector("#audio");
const audioToggle = document.querySelector("#audioToggle");
audioToggle.addEventListener("change", () => {
  if (audioToggle.checked) {
    audio.play();
  } else {
    audio.pause();
  }
});
gsap.to(".aboutTwoLineMask", {
  stagger: 1,
  scrollTrigger: {
    trigger: ".aboutTwoLineMask",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 0.5,
  },
  width: "100%",
  duration: 1.3,
});

gsap.to(".aboutThreeLineOne", {
  scrollTrigger: {
    trigger: ".aboutThreeLineOne",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(2%)",
});

gsap.from(".aboutThreeLineTwo", {
  scrollTrigger: {
    trigger: ".aboutThreeLineTwo",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(8%)",
});

gsap.to(".aboutThreeLineThree", {
  scrollTrigger: {
    trigger: ".aboutThreeLineThree",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(0%)",
});

gsap.from(".aboutThreeLineFour", {
  scrollTrigger: {
    trigger: ".aboutThreeLineFour",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(8%)",
});
